// Not Working Example




  $.getJSON("http://api.openbeerdatabase.com/v1/beers.json?callback=?", function(response) {
    $(response.beers).each(function() {
      var id = Math.floor(Math.random() * (response.beers.length - 1) + 1);
      console.log(response.beers[id].name);
      $("#example").append($("<li>", {text: response.beers[id].name} ));
    });
  });


$('#submit').click(searchBeer);

// // Working Example
// $.getJSON("http://api.openbeerdatabase.com/v1/breweries.json?callback=?", function(response) {
//   $(response.breweries).each(function() {
//     $("#example").append($("<li>", { text : this.name }));
//   });
// });


// angular.module('beer', [])
//   .controller('MainCtrl', function($http, $scope){
//     var apiUrl = 'http://api.openbeerdatabase.com/v1/breweries.json?callback=?';
//
//     var self = this;
//
//     $http.get(apiUrl).success(function(data){
//       $scope.breweries = data.breweries;
//     });
// });

// msg.http("http://api.brewerydb.com/v2/search")
// .query
// type: "beer"
// withBreweries: "Y"
// key: process.env.BREWERYDB_API_KEY
// q: msg.match[1].replace(" ", "+")
// .get() (err, res, body) ->
// data = JSON.parse(body)['data']
// if data
// beer = data[0]
// else
//   msg.send "No beer found"
//   return
//
//   response = beer['name']
//   if beer['breweries']?
//   response += " (#{beer['breweries'][0]['name']})"
//   if beer['style']?
//   response += "\n#{beer['style']['name']}"
//   if beer['abv']?
//   response += "\nABV:  #{beer['abv']}%"
//   if beer['ibu']?
//   response += "\nIBU:  #{beer['ibu']}"
//   if beer['description']?
//   response += "\nDescription:   #{beer['description']}"
//   if beer['foodPairings']?
//   response += "\nFood Pairings:   #{beer['foodPairings']}"
//   msg.send response
