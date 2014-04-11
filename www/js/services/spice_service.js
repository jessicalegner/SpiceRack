'use strict';
app.factory("SpiceService", function($http, $q, $sanitize) {

  var sanitizeSpice = function(spice, id) {
    return {
      amount: $sanitize(spice.amount),
      id: id
    };
  };

  var getSpicesByUser = function(userId) {
    var deferred = $q.defer();
    var promise = $http.get('http://localhost:8000/api/v1/Spices/user/' + userId).success(function (response) {
        deferred.resolve(response);
    });
    return deferred.promise;
  };

  var getSpiceById = function(id, userId) {
    var deferred = $q.defer();
    var promise = $http.get('http://localhost:8000/api/v1/Spices/' + id + '/' + userId).success(function (response) {
        deferred.resolve(response);
    });
    return deferred.promise;
  };

  var deleteSpice = function(id) {
    var deferred = $q.defer();
    var promise = $http.delete('http://localhost:8000/api/v1/Spices/' + id).success(function (response) {
      deferred.resolve(response);
    });
    return deferred.promise;
  };

  var updateSpice = function(spice, id) {
    console.log(sanitizeSpice(spice, id));
    var spice = $http.put("http://localhost:8000/api/v1/Spices/", sanitizeSpice(spice, id));
      // spice.success(function(){

      // });
      return spice;
  }

  return {
    getSpicesByUser: getSpicesByUser,
    getSpiceById: getSpiceById,
    deleteSpice: deleteSpice,
    updateSpice: updateSpice,
    sanitizeSpice: sanitizeSpice
  };
});