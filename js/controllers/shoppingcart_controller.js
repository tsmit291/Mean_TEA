app.controller('shoppingcartController', ['$scope', 'cartService', function($scope, cartService){
$scope.myCart = cartService.myCart;

$scope.test = cartService.test;
// you can call test now in my shopping cart partial
$scope.checkoutCart = true;

}])
