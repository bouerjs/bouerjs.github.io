(function () {
  // The language that needs to loaded
  var lang,
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
  if (!localStorage.$lang) {
    // Get the navigator language
    var id = ((window.navigator || {}).language || 'en').split('-')[0];

    // Loop and check if it's in available languages
    for (let i = 0; i < languages.length; i++)
      if (languages[i].id == id) lang = id;

    // If it was found set it
    lang = localStorage.$lang = lang || 'en';
  } else {
    // Otherwise get the defined language
    lang = localStorage.$lang;
  }

  new Bouer('#app', {
    config: {
      usehash: false
    },
    data: {
      // Properties
      selectedLang: lang,
      translations: languages,
      darkMode: (localStorage.$dark ?? false).toString(),

      isLoading: false,
      menuOpened: false,
      menuLangDropdown: false,
      themeIco: 'fa-moon-o',

      version: 'v3.0.0',
      urls: {
        min: {
          umd: '',
          cjs: '',
          esm: ''
        },
        cdn: {
          umd: '',
          cjs: '',
          esm: ''
        }
      }
      // Methods
    },
    components: BouerComponents({
      lang: lang,
      loadedEvent: function (evt) {
        var el = evt.target;

        // Anchors modifier
        var anchors = [].slice.call(el.querySelectorAll('h1>a'))
        for (let i = 0; i < anchors.length; i++)
          anchors[i].innerHTML += '<i class="fa fa-link"></i>';

        // Code Highlight
        var codes = [].slice.call(el.querySelectorAll('code'));
        for (let i = 0; i < codes.length; i++) {
          var code = codes[i];
          var lang = code.getAttribute('lang')
          var highlightedCode = Prism.highlight(code.innerHTML, Prism.languages[lang], lang);
          code.innerHTML = highlightedCode;
        }


        if (location.href.includes('/docs/')){
          var navDoc = document.querySelector('a.nav-doc');
          if (navDoc && !navDoc.classList.contains('active-link'))
            navDoc.classList.add('active-link');
        }
      }
    })
  });
})();