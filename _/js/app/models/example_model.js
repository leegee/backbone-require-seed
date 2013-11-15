define([
  'underscore',
  'backbone'
], function(_, Backbone){
	var exampleModel = Backbone.Model.extend({
		idAttribute: "uuid",
		//It'll only be used when we are trying to fetch a single object (automatically prepends sthe id)
		urlRoot: "/example",
		defaults: {
			name: "<no name>"
		}
	});

	// We don instantiate the model, as we'll do when we need to create a new instance of it.
  return exampleModel;
});
