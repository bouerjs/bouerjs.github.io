function BouerComponents(sharedOptions) {
  var lang = sharedOptions.lang;
  var loadedEvent = sharedOptions.loadedEvent;
  var mountedEvent = sharedOptions.mountedEvent;
  var base = '/components/' + lang + '/docs/';

  return [{
      name: 'app-header',
      path: '/components/' + lang + '/part/header.html'
    },
    {
      name: 'app-footer',
      path: '/components/' + lang + '/part/footer.html'
    },
    {
      name: 'doc-menu',
      path: '/components/doc-menu.html'
    },
    {
      name: 'code-editor',
      path: '/components/code-editor.html'
    },

    // Routes
    {
      isDefault: true,
      path: '/components/' + lang + '/home.component.html',
      route: '/',
    },
    {
      path: '/components/' + lang + '/cli.docs.component.html',
      route: '/cli.docs.html',
      title: 'CLI Documentation'
    },
    {
      path: '/components/' + lang + '/play.component.html',
      route: '/play.html',
      title: 'Playground'
    },
    {
      path: '/components/' + lang + '/tutorial.component.html',
      route: '/tutorial.html',
      title: 'Tutorial'
    },

    // Documentation sections
    {
      name: 'bindings',
      path: base + 'bindings.html',
      mounted: mountedEvent,
      loaded: loadedEvent,
      route: '/docs/bindings.html'
    },
    {
      name: 'directives',
      path: base + 'directives.html',
      mounted: mountedEvent,
      loaded: loadedEvent,
      route: '/docs/directives.html'
    },
    {
      name: 'components',
      path: base + 'components.html',
      mounted: mountedEvent,
      loaded: loadedEvent,
      route: '/docs/components.html'
    },
    {
      name: 'delimiters',
      path: base + 'delimiters.html',
      mounted: mountedEvent,
      loaded: loadedEvent,
      route: '/docs/delimiters.html'
    },
    {
      name: 'events',
      path: base + 'events.html',
      mounted: mountedEvent,
      loaded: loadedEvent,
      route: '/docs/events.html'
    },
    {
      name: 'installation',
      path: base + 'installation.html',
      mounted: mountedEvent,
      loaded: loadedEvent,
      route: '/docs/installation.html'
    },
    {
      name: 'instance',
      path: base + 'instance.html',
      mounted: mountedEvent,
      loaded: loadedEvent,
      route: '/docs/instance.html'
    },
    {
      name: 'introduction',
      path: base + 'introduction.html',
      mounted: mountedEvent,
      loaded: loadedEvent,
      route: '/docs/introduction.html'
    },
    {
      name: 'methods',
      path: base + 'methods.html',
      mounted: mountedEvent,
      loaded: loadedEvent,
      route: '/docs/methods.html'
    },
    {
      name: 'routing',
      path: base + 'routing.html',
      mounted: mountedEvent,
      loaded: loadedEvent,
      route: '/docs/routing.html'
    },
  ]
}