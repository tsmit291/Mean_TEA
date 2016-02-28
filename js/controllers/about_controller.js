app.controller('aboutController', ['$scope', '$http', function($scope, $http){
  $scope.works = "hello it works";
  $scope.whereami = "i'm on the about page homie"
  console.log('you have reached the about controller friend');
}])
