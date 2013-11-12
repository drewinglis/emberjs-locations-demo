var Location = require('../models/location');

var LocationRoute = Ember.Route.extend({

  model: function() {
    return Location.find();
  },
  setupController: function (controller, model) {
    controller.set('content', model);
  }

});

module.exports = LocationRoute;
