var projectApp = angular.module('pkTrainApp', []);

projectApp.controller('loadBookCtrl', ['$scope', '$http', '$filter', '$q', function($scope, $http, $filter, $q) {
    $http.get("http://localhost/yii2-training/api/v1/books").then(function (data) {
        $scope.book = data.data.items[0];
    }, function (error) {
        console.log(error);
    });
}]);