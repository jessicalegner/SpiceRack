angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Friends', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var friends = [
    { id: 0, name: 'Scruff McGruff' },
    { id: 1, name: 'G.I. Joe' },
    { id: 2, name: 'Miss Frizzle' },
    { id: 3, name: 'Ash Ketchum' }
  ];

  return {
    all: function() {
      return friends;
    },
    get: function(friendId) {
      // Simple index lookup
      return friends[friendId];
    }
  }
}),

angular.module('starter.services', []).factory('Spices', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var spices = [
    { id: 0, name: 'Ground Cinnamon', manufacturer: 'Meijer', exp_date: '2016-04-05' },
    { id: 1, name: 'Nutmeg', manufacturer: 'Meijer', exp_date: '2016-04-05' },
    { id: 2, name: 'Seasoned Salt', manufacturer: 'Meijer', exp_date: '2016-04-05' },
    { id: 3, name: 'Garlic Powder', manufacturer: 'Meijer', exp_date: '2016-04-05' }
  ];

  return {
    all: function() {
      return spices;
    },
    get: function(spiceId) {
      // Simple index lookup
      return spices[spiceId];
    }
  }
});