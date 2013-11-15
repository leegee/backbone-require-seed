define([
	// Libraries to load
  'jquery',
  'underscore',
  'backbone',
  // Views to load
  'views/home/main',
  'views/examples/list',
  'views/examples/detail'
], function($, _, Backbone, homeMainView, exampleListView, exampleDetailView){

	var AppRouter = Backbone.Router.extend({
		routes: {
			'examples': 'showExamples',
			'example/:id': 'showExample',
			// Default
			'*actions': 'defaultAction'
		},

		showExamples: function() {
			exampleListView.render();
		},
		showExample: function(id) {
			exampleDetailView.show(id);
		},
		defaultAction: function(actions) {
			homeMainView.render();
		}
	});

	var initialize = function(){
		var app_router = new AppRouter();
		Backbone.history.start();
	};

  return {
  	initialize: initialize
  };
});
