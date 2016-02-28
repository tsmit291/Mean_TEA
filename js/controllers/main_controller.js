app.controller('mainController', ['$scope', 'teaService', function($scope, teaService){
  $scope.works = "hello it works";

  var promise = teaService.getTea();

  promise.then(function(collection){
// whatever results are from promise (once it is relolved) this gets set equal to teas. Then I call teas.
    $scope.teas = collection.data;
    console.log($scope.teas);
  });
}]);

//
//
// var promise = Tea.getall();
//   promise.then(function(data) {
//   $scope.teas = data.data;
//   console.log('5 ********** ', $scope.teas);
// })
