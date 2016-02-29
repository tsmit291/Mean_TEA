app.controller('mainController', ['$scope', 'teaService', function($scope, teaService){
  $scope.works = "hello it works";

  var promise = teaService.getTea();

  promise.then(function(collection){
// whatever results are from promise (once it is resolved) this gets set equal to teas. Then I call teas.
    $scope.teaCollection = collection.data;
    console.log($scope.teaCollection);
  });
}]);
