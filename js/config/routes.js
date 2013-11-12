var App = require('./app');

App.Router.map(function() {
  this.resource('locations', { path: '/' });
});

