var MapView = Ember.View.extend({
  classNames: ['map'],
  id: 'map_canvas',
  map: null,
  tagName: 'div',

  didInsertElement: function() {
    var mapOptions = {
      center: new google.maps.LatLng(41.26755143, -93.96173487),
      zoom: 3,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(this.$().get(0), mapOptions);

    this.set('map', map);
  },

  willDestroyElement: function () {
    this.set('map', null);
  },

  scheduleSync: function() {
    Ember.run.once(this, 'sync');
  }.observes('controller.[]').on('didInsertElement'),

  sync: function() {
    var locations = this.get('controller');
    var map = this.get('map');

    if (!map || !locations) {
      return;
    }

    locations.forEach(function (loc) {
      loc.setupMarker(map);
    }, this);
  }
});

module.exports = MapView;
