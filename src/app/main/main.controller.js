'use strict';

angular.module('34AngularizeMeCapn', [])
  .controller('MainCtrl', function () {
    var self = this;

    $.getJSON('http://api.openbeerdatabase.com/v1/beers.json?callback=?', function(data){
        console.log(data);
        self.beerDB = data;
      });

    this.randomBeer = function() {
      var id = Math.floor(Math.random() * (self.beerDB.beers.length - 1) + 1);
      console.log(id);
      self.beerID = self.beerDB.beers[id];
      $("#beerName").text(self.beerID.name);
      $("#beerDesc").text(self.beerID.description);
    };
});
