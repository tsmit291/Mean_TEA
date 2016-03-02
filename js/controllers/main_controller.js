app.controller('mainController', ['$scope', 'teaService', 'cartService', function($scope, teaService, cartService){

  var promise = teaService.getTea();
  $scope.myCart = cartService.cart;
  $scope.add = cartService.add;

  promise.then(function(collection){
// whatever results are from promise (once it is resolved) this gets set equal to teas. Then I call teas.
    $scope.teaCollection = collection.data;
  });
}]);
