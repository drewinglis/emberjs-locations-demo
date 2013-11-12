var MapView = Ember.View.extend({
  classNames: ['map'],
  id: 'map_canvas',
  tagName: 'div',

  didInsertElement: function() {
    var mapOptions = {
      center: new google.maps.LatLng(41.26755143, -93.96173487),
      zoom: 3,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(this.$().get(0), mapOptions);

    var locations = this.get('controller').get('content');

    locations.forEach(function (loc) {
      new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(
          loc.get('latitude'),
          loc.get('longitude')
        )
      });
    }, this);
  }
});

module.exports = MapView;
