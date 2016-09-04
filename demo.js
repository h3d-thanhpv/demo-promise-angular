var projectApp = angular.module('pkTrainApp', []);

projectApp.controller('loadBookCtrl', ['$scope', '$http', '$filter', function($scope, $http, $filter) {
    $scope.listBooks = {};
    function getBookInfo(url) {
        $http({
            method: 'GET',
            url: url
        }).success(function (data) {
            $scope.listBooks = data.items;
            $scope.book = $scope.listBooks[0];
        }).error(function (data, status, headers, config) {
        });
    }
    $scope.baseUrl = "http://localhost/yii2-training/api/v1/books";
    getBookInfo($scope.baseUrl);
}]);