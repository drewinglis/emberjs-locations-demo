var LocationController = Ember.ObjectController.extend({
  marker: null,

  // TODO: destroy markers if locations are destroyed
  setupMarker: function (map) {
    if (this.get('marker')) {
      return;
    }

    var marker = new google.maps.Marker({
      map: map,
      position: new google.maps.LatLng(
        this.get('latitude'),
        this.get('longitude')
      )
    });

    this.set('marker', marker);
  }
});

module.exports = LocationController;
