// $("#submit").click(function(){
//   $.getJSON("http://api.openbeerdatabase.com/v1/beers.json?callback=?", function(response) {
//     $(response.beers).each(function() {
//       $("#example").append($("<li>", { text : this.name }));
//     });
//   });
// });

'use strict';

angular.module('beer', [])
  .controller('MainCtrl', function($http, $scope){
    var apiUrl = 'http://api.openbeerdatabase.com/v1/breweries.json?callback=?';

    var self = this;

    $http.get(apiUrl).success(function(data){
      $scope.breweries = data.breweries;
      console.log(breweries);
    });
});
