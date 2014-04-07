'use strict';
app.factory("SpiceService", function($http, $q) {

  var getSpicesByUser = function(userId) {
    var deferred = $q.defer();
    var promise = $http.get('http://localhost:8000/api/v1/Spices/user/' + userId).success(function (response) {
        deferred.resolve(response);
    });
    return deferred.promise;
  };

  var getSpiceById = function(id) {
    var deferred = $q.defer();
    var promise = $http.get('http://localhost:8000/api/v1/Spices/' + id).success(function (response) {
        deferred.resolve(response);
    });
    return deferred.promise;
  };

  return {
    getSpicesByUser: getSpicesByUser,
    getSpiceById: getSpiceById
  };
});