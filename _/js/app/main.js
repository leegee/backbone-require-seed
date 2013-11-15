require.config({
  shim: {   // Using shim we define dependencies between our libraries
    'underscore': {
      exports: '_'
    },
    'backbone': {
      deps: [
        'underscore',
        'jquery'
      ],
      exports: 'Backbone'
    }
  },
  paths: {   // Require.js allows us to configure shortcut alias
    jquery: '../lib/jquery/jquery-min',
    underscore: '../lib/underscore/underscore-min',
    backbone: '../lib/backbone/backbone-min',
    text: '../lib/require/text',
    templates: 'templates'
  }
});

require([
  // Load our app module and pass it to our definition function
  'app',

], function(App){ // The "app" dependency is passed in as "App"
  App.initialize();
});
