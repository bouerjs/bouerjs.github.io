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
      title: 'Bouer'
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
    {
      name: 'page-404',
      path: '/components/' + lang + '/404.html',
      route: '/404.html',
      title: 'Page NotFound',
      isNotFound: true
    },

    // Documentation sections
    {
      name: 'bindings',
      path: base + 'bindings.html',
      mounted: mountedEvent,
      loaded: loadedEvent,
      route: '/docs/bindings.html',
      title: 'Bindings • Bouer'
    },
    {
      name: 'directives',
      path: base + 'directives.html',
      mounted: mountedEvent,
      loaded: loadedEvent,
      route: '/docs/directives.html',
      title: 'Directives • Bouer'
    },
    {
      name: 'components',
      path: base + 'components.html',
      mounted: mountedEvent,
      loaded: loadedEvent,
      route: '/docs/components.html',
      title: 'Components • Bouer'
    },
    {
      name: 'delimiters',
      path: base + 'delimiters.html',
      mounted: mountedEvent,
      loaded: loadedEvent,
      route: '/docs/delimiters.html',
      title: 'Delimiters • Bouer'
    },
    {
      name: 'events',
      path: base + 'events.html',
      mounted: mountedEvent,
      loaded: loadedEvent,
      route: '/docs/events.html',
      title: 'Events • Bouer'
    },
    {
      name: 'installation',
      path: base + 'installation.html',
      mounted: mountedEvent,
      loaded: loadedEvent,
      route: '/docs/installation.html',
      title: 'Installation • Bouer'
    },
    {
      name: 'instance',
      path: base + 'instance.html',
      mounted: mountedEvent,
      loaded: loadedEvent,
      route: '/docs/instance.html',
      title: 'Tnstance • Bouer'
    },
    {
      name: 'introduction',
      path: base + 'introduction.html',
      mounted: mountedEvent,
      loaded: loadedEvent,
      route: '/docs/introduction.html',
      title: 'Introduction • Bouer'
    },
    {
      name: 'methods',
      path: base + 'methods.html',
      mounted: mountedEvent,
      loaded: loadedEvent,
      route: '/docs/methods.html',
      title: 'Methods • Bouer'
    },
    {
      name: 'routing',
      path: base + 'routing.html',
      mounted: mountedEvent,
      loaded: loadedEvent,
      route: '/docs/routing.html',
      title: 'Routing • Bouer'
    },
    {
      name: 'tooling',
      path: base + 'tooling.html',
      mounted: mountedEvent,
      loaded: loadedEvent,
      route: '/docs/tooling.html',
      title: 'Tooling • Bouer'
    },
  ]
}