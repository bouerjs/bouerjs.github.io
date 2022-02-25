function BouerComponents(sharedOptions) {
  var lang = sharedOptions.lang;
  var loadedEvent = sharedOptions.loadedEvent;
  var mountedEvent = sharedOptions.mountedEvent;
  var base = '/components/' + lang + '/docs/';

  return [
    // Simple Component
    {
      name: 'app-header',
      path: '/components/' + lang + '/part/header.html'
    },
    {
      name: 'app-footer',
      path: '/components/' + lang + '/part/footer.html'
    },
    {
      name: 'menu-docs',
      path: '/components/menu-docs.html'
    },
    {
      name: 'menu-cli-docs',
      path: '/components/menu-cli-docs.html'
    },
    {
      name: 'menu-tutorial',
      path: '/components/menu-tutorial.html'
    },
    {
      name: 'editor',
      path: '/components/editor.html'
    },
    {
      name: 'tutorial-wrapper',
      path: '/components/' + lang + '/tutorial/tutorial-wrapper.html',
      mounted: mountedEvent,
      loaded: loadedEvent,
    },

    /* Routes */
    // Global
    {
      isDefault: true,
      path: '/components/' + lang + '/home.component.html',
      route: '/',
      title: 'Bouer'
    },
    {
      path: '/components/' + lang + '/play.component.html',
      route: '/play.html',
      title: 'Playground'
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
      title: 'Bindings • Documentation'
    },
    {
      name: 'directives',
      path: base + 'directives.html',
      mounted: mountedEvent,
      loaded: loadedEvent,
      route: '/docs/directives.html',
      title: 'Directives • Documentation'
    },
    {
      name: 'components',
      path: base + 'components.html',
      mounted: mountedEvent,
      loaded: loadedEvent,
      route: '/docs/components.html',
      title: 'Components • Documentation'
    },
    {
      name: 'delimiters',
      path: base + 'delimiters.html',
      mounted: mountedEvent,
      loaded: loadedEvent,
      route: '/docs/delimiters.html',
      title: 'Delimiters • Documentation'
    },
    {
      name: 'events',
      path: base + 'events.html',
      mounted: mountedEvent,
      loaded: loadedEvent,
      route: '/docs/events.html',
      title: 'Events • Documentation'
    },
    {
      name: 'installation',
      path: base + 'installation.html',
      mounted: mountedEvent,
      loaded: loadedEvent,
      route: '/docs/installation.html',
      title: 'Installation • Documentation'
    },
    {
      name: 'instance',
      path: base + 'instance.html',
      mounted: mountedEvent,
      loaded: loadedEvent,
      route: '/docs/instance.html',
      title: 'Instance • Documentation'
    },
    {
      name: 'introduction',
      path: base + 'introduction.html',
      mounted: mountedEvent,
      loaded: loadedEvent,
      route: '/docs/introduction.html',
      title: 'Introduction • Documentation'
    },
    {
      name: 'methods',
      path: base + 'methods.html',
      mounted: mountedEvent,
      loaded: loadedEvent,
      route: '/docs/methods.html',
      title: 'Methods • Documentation'
    },
    {
      name: 'routing',
      path: base + 'routing.html',
      mounted: mountedEvent,
      loaded: loadedEvent,
      route: '/docs/routing.html',
      title: 'Routing • Documentation'
    },
    {
      name: 'tooling',
      path: base + 'tooling.html',
      mounted: mountedEvent,
      loaded: loadedEvent,
      route: '/docs/tooling.html',
      title: 'Tooling • Documentation'
    },

    // Tutorial
    {
      path: '/components/' + lang + '/tutorial/introduction.html',
      route: '/tutorial/introduction.html',
      title: 'Introduction • Tutorial',
    },
    {
      path: '/components/' + lang + '/tutorial/data-rendering.html',
      route: '/tutorial/data-rendering.html',
      title: 'Data Rendering • Tutorial',
    },
    {
      path: '/components/' + lang + '/tutorial/bindings.html',
      route: '/tutorial/bindings.html',
      title: 'Bindings • Tutorial',
    },
    {
      path: '/components/' + lang + '/tutorial/events.html',
      route: '/tutorial/events.html',
      title: 'Events Listeners • Tutorial',
    },
    {
      path: '/components/' + lang + '/tutorial/directive-wait-data.html',
      route: '/tutorial/directive-wait-data.html',
      title: 'Waiting Data • Tutorial',
    },
    {
      path: '/components/' + lang + '/tutorial/directive-conditional.html',
      route: '/tutorial/directive-conditional.html',
      title: 'Conditional Rendering • Tutorial',
    },
    {
      path: '/components/' + lang + '/tutorial/directive-list-rendering.html',
      route: '/tutorial/directive-list-rendering.html',
      title: 'List Rendering • Tutorial',
    },
    {
      path: '/components/' + lang + '/tutorial/directive-list-rendering.html',
      route: '/tutorial/directive-list-rendering.html',
      title: 'List Rendering • Tutorial',
    },
    {
      path: '/components/' + lang + '/tutorial/directive-request.html',
      route: '/tutorial/directive-request.html',
      title: 'External Request • Tutorial',
    },

    {
      path: '/components/' + lang + '/tutorial/property.html',
      route: '/tutorial/property.html',
      title: 'Property',
    },
    {
      path: '/components/' + lang + '/tutorial/property-computed.html',
      route: '/tutorial/property-computed.html',
      title: 'Computed • Property',
    },
    {
      path: '/components/' + lang + '/tutorial/property-watch.html',
      route: '/tutorial/property-watch.html',
      title: 'Watch • Property',
    },
    {
      path: '/components/' + lang + '/tutorial/property-watch-scope.html',
      route: '/tutorial/property-watch-scope.html',
      title: 'Watch Scope • Property',
    },

    {
      path: '/components/' + lang + '/tutorial/form-obj-conversion.html',
      route: '/tutorial/form-obj-conversion.html',
      title: 'Form to JS Object Conversion',
    },

    {
      path: '/components/' + lang + '/tutorial/components.html',
      route: '/tutorial/components.html',
      title: 'Components',
    },
    {
      path: '/components/' + lang + '/tutorial/components-lifecycle.html',
      route: '/tutorial/components-lifecycle.html',
      title: 'Lifecycle • Components',
    },
    {
      path: '/components/' + lang + '/tutorial/components-data.html',
      route: '/tutorial/components-data.html',
      title: 'Data Injection • Components',
    },
    {
      path: '/components/' + lang + '/tutorial/components-dynamic-injection.html',
      route: '/tutorial/components-dynamic-injection.html',
      title: 'Dynamic Injection • Components',
    },
    {
      path: '/components/' + lang + '/tutorial/components-dynamic-injection.html',
      route: '/tutorial/components-dynamic-injection.html',
      title: 'Dynamic Injection • Components',
    },
    {
      path: '/components/' + lang + '/tutorial/components-slots.html',
      route: '/tutorial/components-slots.html',
      title: 'Slots • Components',
    },
    {
      path: '/components/' + lang + '/tutorial/congrats.html',
      route: '/tutorial/congrats.html',
      title: 'Congratulations',
    },

    // CLI
    {
      path: '/components/' + lang + '/cli/introduction.html',
      route: '/cli/introduction.html',
      title: 'CLI Documentation',
      mounted: mountedEvent,
      loaded: loadedEvent,
    },
  ]
}