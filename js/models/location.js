var Location = DS.Model.extend({
  latitude: DS.attr('number'),
  longitude: DS.attr('number')
});

Location.FIXTURES = [
  {
    id: 1,
    latitude: 43.6078891,
    longitude: -73.74778569999999
  },
  {
    id: 2,
    latitude: 35.171723,
    longitude: -103.7249662
  },
  {
    id: 3,
    latitude: 45.0230422,
    longitude: -104.4124527
  }
];

module.exports = Location;
