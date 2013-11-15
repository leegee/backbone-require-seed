define([
  'underscore',
  'backbone',
  'models/example_model'
], function(_, Backbone, exampleModel){

	var exampleCollection = Backbone.Collection.extend({
		model: exampleModel,
		url: "example/list.json",
		initialize: function(){		// Deferred load
			this.deferred = this.fetch();
		}
	});

	// We don't instantiate the collection, as we'll do when we need to create a new instance of it.
	 return exampleCollection;
});
