// This is a testing ground that @rickCarlino and @simonv3 use for S3 testing
var s3upload = angular.module('s3upload', ['ngS3upload']);

var s3upload_controller = function ($scope) {
  $scope.bucket= "openfarmbucket";
  $scope.s3upload = {};
};

s3upload.controller('s3ctrl', ['$scope', s3upload_controller]);
