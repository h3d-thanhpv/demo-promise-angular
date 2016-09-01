var projectApp = angular.module('pkTrainApp', []);

projectApp.controller('loadBookCtrl', ['$scope', '$http', '$filter', function($scope, $http, $filter) {
    $scope.bookInfo = {};
    $scope.baseUrl = "http://localhost/yii2-training/api/v1/books";
}]);