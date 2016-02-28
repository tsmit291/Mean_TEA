
// http lets us link to our json file, $q is to defer our promise
app.service('teaService', ['$http', '$q', function($http, $q){
  var deferred = $q.defer();
  $http.get('./teaCollection.json').then(function (data){
    console.log('data is : ', data);
    deferred.resolve(data);
  });
  // says i want to do this later (a promise)
  // deferred.resolve resolves the data later
  this.getTea = function (){
    return deferred.promise;

  }
}]);
