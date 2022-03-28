(function () {
  // The language that needs to loaded
  var lang = 'en',
    // Website available languages
    languages = [{
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

  new Bouer('#bouer-app', {
    config: {
      usehash: false
    },
    data: {
      // Properties
      selectedLang: lang,
      translations: languages,
      darkMode: (localStorage.$dark || false).toString() === 'true',

      isLoading: false,
      menuOpened: false,
      docMenuOpened: false,
      menuLangDropdown: false,
      themeIco: 'fa-moon-o',

      version: 'v3.0.0',
      urls: {
        min: {
          umd: 'https://cdn.jsdelivr.net/gh/bouerjs/bouer@3.0.0/dist/bouer.min.js',
          cjs: 'https://cdn.jsdelivr.net/gh/bouerjs/bouer@3.0.0/dist/bouer.common.min.js',
          esm: 'https://cdn.jsdelivr.net/gh/bouerjs/bouer@3.0.0/dist/bouer.esm.min.js'
        },
        cdn: {
          umd: 'https://cdn.jsdelivr.net/gh/bouerjs/bouer@3.0.0/dist/bouer.js',
          cjs: 'https://cdn.jsdelivr.net/gh/bouerjs/bouer@3.0.0/dist/bouer.common.js',
          esm: 'https://cdn.jsdelivr.net/gh/bouerjs/bouer@3.0.0/dist/bouer.esm.js'
        }
      }
      // Methods
    },
    components: BouerComponents({
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
          code.innerHTML = highlightedCode;

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
    }),
    beforeLoad: function () {
      // Is loading something
      var pagesLoading = 0;
      var self = this;

      function decreasePageLoaded() {
        pagesLoading--;
        if (self.data.isLoading == true && pagesLoading <= 0) {
          self.data.isLoading = false;
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
    },
    loaded: function () {
      // Redirecting...
      let path = localStorage.getItem('path');
      if (path) {
        localStorage.removeItem('path');
        this.$routing.navigate(path);
      }

      this.watch('darkMode', function (v) {
        themeHandler(v);
      });
    }
  });
})();