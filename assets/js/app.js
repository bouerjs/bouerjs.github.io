(function () {
  // The default language that needs to loaded
  var lang = 'en';

  // Website available languages
  var languages = [
    {
      id: 'en',
      name: 'English'
    },
    {
      id: 'pt',
      name: 'Português'
    }
  ];


  // If some language isn't selected
  // if (!localStorage.$lang) {

  //   // Get the navigator language
  //   var id = ((window.navigator || {}).language || 'en').split('-')[0];

  //   // Loop and check if it's in available languages
  //   for (let i = 0; i < languages.length; i++)
  //     if (languages[i].id == id) lang = id;

  //   // If it was found set it
  //   lang = localStorage.$lang = lang || 'en';
  // } else {
  //   // Otherwise get the defined language
  //   lang = localStorage.$lang;
  // }

  function toComponent(content) {
    let div = document.createElement('div');
    div.innerHTML = content;
    return div.children[0];
  }

  var searchableComponents = [];
  function onSearch(search) {
    var data = this.data;

    // The seach text is empty, clear the items
    if (search.length == 0)
      data.searchResults = [];

    // Only do search if the length is higher than 2
    if (search.length < 2) return;

    // Load the searchable components only once
    if (searchableComponents.length == 0) {
      searchableComponents = this.options.components.filter(x =>
        x.path && x.route &&
        (
          x.path.includes('docs/') ||
          x.path.includes('tutorial/') ||
          x.path.includes('cli/')
        ));
    }

    // Clear it before do new search
    data.searchResults = [];

    for (const component of searchableComponents) {

      var el = toComponent(component.template);
      if (!RegExp(search, 'igm').exec(el.textContent)) continue;

      // Getting all the children of the element
      var items = [].slice.call(el.querySelector('section').children)

      // Store the last anchor
      var ref = null;

      for (const item of items) {

        // Store the current anchor to the storage to be alble to use
        var a = item.querySelector("a[id]");
        if (a) ref = a;

        // Checking if we found a match in the content
        var match = RegExp(search, 'igm').exec(item.textContent);
        if (!match) continue;

        // If it's a code, ignore
        if (item.querySelector("pre")) continue;

        // Preparing the data to set
        var title = ref ? ref.textContent : component.title;
        var url = ref ? component.route + '#' + ref.id : component.route;

        var preDots = match.index > 3 ? '...' : '';
        var posDots = match.index + 50 < item.textContent.length ? '...' : '';

        var description = preDots +
          item.textContent.substr(match.index, 80)
            .replaceAll('\n', ' ')
            .replaceAll('  ', ' ')
            .trim() + posDots;

        data.searchResults.push({
          icon: component.path.includes('docs/') ? 'fa-file-text-o' : 'fa-code',
          title: title,
          description: description,
          url: url
        });
      }
    }
  }

  function beforeLoad() {
    // Is loading something
    var pagesLoading = 0;
    var app = this;

    function decreasePageLoaded() {
      pagesLoading--;
      if (app.data.isLoading == true && pagesLoading <= 0) {
        app.data.isLoading = false;
      }

      if (pagesLoading <= 0) {
        pagesLoading = 0;
      }
    }

    this.on('component:created', function () {
      pagesLoading++;
      if (this.data.isLoading === false)
        this.data.isLoading = true;
    });

    // Everything loaded
    this.on('component:loaded', function () {
      decreasePageLoaded();
    });

    this.on('component:failed', function () {
      decreasePageLoaded();
    });
  }

  function loaded() {
    // Redirecting...
    var path = localStorage.getItem('path');
    if (path) {
      localStorage.removeItem('path');
      this.$routing.navigate(path);
    }

    this.watch('darkMode', function (v) {
      themeHandler(v);
    });

    this.watch('search', function (search) {
      onSearch.call(this, search)
    });

    this.watch('showSearchContainer', function (value) {
      if (value == false) {
        this.data.search = '';
        return;
      }

      document.querySelector('.search-container .search-card .search-input input')
        .focus();
    });

    var app = this;
    document.onkeyup = function (evt) {

      if (app.data.showSearchContainer == true) {
        if (evt.keyCode == 27 || evt.code == 'Escape') {
          app.data.showSearchContainer = false;
        }
      }

    };
  }

  var data = {
    // Properties
    selectedLang: lang,
    translations: languages,
    darkMode: (localStorage.$dark || false).toString() === 'true',

    isLoading: false,
    menuOpened: false,
    docMenuOpened: false,
    menuLangDropdown: false,
    themeIco: 'fa-moon-o',

    search: '',
    showSearchContainer: false,
    searchResults: [],
    onSearchItemClick: function () {
      this.data.showSearchContainer = false;
      this.data.search = '';
    },
    version: 'v3.1.1',
    urls: {
      min: {
        umd: 'https://cdn.jsdelivr.net/gh/bouerjs/bouer@3.1.1/dist/bouer.min.js',
        cjs: 'https://cdn.jsdelivr.net/gh/bouerjs/bouer@3.1.1/dist/bouer.common.min.js',
        esm: 'https://cdn.jsdelivr.net/gh/bouerjs/bouer@3.1.1/dist/bouer.esm.min.js'
      },
      cdn: {
        umd: 'https://cdn.jsdelivr.net/gh/bouerjs/bouer@3.1.1/dist/bouer.js',
        cjs: 'https://cdn.jsdelivr.net/gh/bouerjs/bouer@3.1.1/dist/bouer.common.js',
        esm: 'https://cdn.jsdelivr.net/gh/bouerjs/bouer@3.1.1/dist/bouer.esm.js'
      }
    }
    // Methods
  };

  Prism.languages["shell"] = Prism.languages["txt"];

  var components = BouerComponents({
    lang: lang,
    loadedEvent: function (evt) {
      var el = evt.target;
      var isDoc = location.href.includes('/docs/');
      var isCliDoc = location.href.includes('/cli/');

      var anchorsWithId = [].slice.call(el.querySelectorAll('a[id]'));
      for (let i = 0; i < anchorsWithId.length; i++) {
        var anchor = anchorsWithId[i];
        anchor.href = location.href.split('#')[0].split('?')[0] + '#' + anchor.id;

        anchor.onclick = function (evt) {
          evt.preventDefault();
          history.replaceState({}, '', this.href);
        }
      }

      if (isDoc || isCliDoc) {
        // Anchors modifier
        var anchors = [].slice.call(el.querySelectorAll('h1>a'));
        for (let i = 0; i < anchors.length; i++)
          anchors[i].innerHTML += '<i class="fa fa-link"></i>';
      }

      // Code Highlight
      var codes = [].slice.call(el.querySelectorAll('code'));
      for (let i = 0; i < codes.length; i++) {
        var code = codes[i];
        var codeText = code.innerHTML;
        var lang = code.getAttribute('lang');
        var highlightedCode = Prism.highlight(codeText, Prism.languages[lang], lang);
        code.innerHTML = highlightedCode.replaceAll('<span class="token operator">=</span><span class="token operator">&amp;</span>gt<span class="token punctuation">;</span>', '=>');

        Promise.resolve(code.querySelectorAll('.attr-value'))
          .then(function (attrValues) {
            for (const item of attrValues) {
              if (item.innerText == '=""')
                item.parentNode.removeChild(item);
            }
          });
      }

      var executables = [].slice.call(el.querySelectorAll('[execute]'));
      for (let i = 0; i < executables.length; i++) {
        var executable = executables[i];
        var _codes = executable.querySelectorAll('code');
        var result = executable.querySelector('.result');
        var _html = _codes[0];
        var _js = _codes[1];

        result.innerHTML = _html.innerText;
        eval(_js.innerText);
      }

      if (isDoc || isCliDoc) {
        // marking the active link
        var navDoc = isDoc ? document.querySelector('a.nav-doc') : document.querySelector('a.nav-cli');
        if (navDoc && !navDoc.classList.contains('active-link'))
          navDoc.classList.add('active-link');

        if (location.hash) {
          var view = this.el.querySelector('.documentation .view');
          var anchor = view.querySelector(location.hash);
          view.scrollTop = anchor.getBoundingClientRect().top - 60;
        }
      }
    }
  });

  new Bouer('#bouer-app', {
    config: {
      usehash: false,
      prefetch: true
    },
    data: data,
    components: components,
    beforeLoad: beforeLoad,
    loaded: loaded
  });
})();