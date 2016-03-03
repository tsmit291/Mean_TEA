app.controller('shoppingcartController', ['$scope', 'cartService', function($scope, cartService){
$scope.myCart = cartService.myCart;

$scope.test = cartService.test;
// you can call test now in my shopping cart partial
$scope.checkoutCart = true;

$scope.removeRow = cartService.removeRow
// removeRow is equal to my removeRow function in my cart service file. this initializes it.

$scope.editRow = function(qty){
  $scope.revealDropdown = !$scope.revealDropdown
}

}])
