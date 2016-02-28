app.controller('mainController', ['$scope', '$http', function($scope, $http){
  $scope.works = "hello it works";
  $scope.whereami = "i'm on the homepage homie"
  console.log('you have reached the main controller friend');
}])
