angular.module('myApp.donkeyData', [])
  .factory('donkeyData', function () {
    var donkey = {
      coatColor: '#555555',
      jawsColor: '#eeeeee',
      earColor: '#888888',
      size: 1.5,
      headRotation: 0
    }
    
    return donkey
  })
