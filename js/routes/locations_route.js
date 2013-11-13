var Location = require('../models/location');
var LocationController = require('../controllers/location_controller');

var LocationRoute = Ember.Route.extend({
  model: function() {
    return Location.find();
  },
  setupController: function (controller, model) {
    controller.set('model', model);
  }
});

module.exports = LocationRoute;
