'use strict';

angular.module('sampleApp', ['barcodeScanner'])
  .controller('sampleCtrl', function ($scope, barcodeScanner) {
    $scope.scan = function () {
      barcodeScanner.scan().then( function (result) {
        if (result.canceled) {
          return;
        }
        // text from qr code or barcode is contained in result.text
      }, function (err) {
        alert(err);
      });
    };
  });