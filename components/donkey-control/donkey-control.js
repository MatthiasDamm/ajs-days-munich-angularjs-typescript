function donkeyControlController (donkeyData) {
  this.data = donkeyData
  this.headRotation = 10
}

angular.module('myApp.donkeyControl', [
  'myApp.donkeyData'
])
  .component('donkeyControl', {
    templateUrl: 'components/donkey-control/donkey-control.html',
    controller: donkeyControlController
  })
