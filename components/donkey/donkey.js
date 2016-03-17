function donkeyController (donkeyData) {
  this.data = donkeyData
}

angular.module('myApp.donkey', [
  'myApp.donkeyData'
])
  .component('donkey', {
    templateUrl: 'components/donkey/donkey.html',
    controller: donkeyController
  })
