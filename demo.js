var projectApp = angular.module('pkTrainApp', []);

projectApp.controller('loadBookCtrl', ['$scope', '$http', '$filter', '$q', function($scope, $http, $filter, $q) {
    var promise = getBookInfo("http://localhost/yii2-training/api/v1/books");
    promise.then(function (data) {
        $scope.book = data.items[0];
    }, function (error) {
        console.log(error);
    });

    function getBookInfo(url) {
        var defer = $q.defer();
        $http.get(url).success(function(result) {
            defer.resolve(result);
        }).error(function (error) {
            defer.reject(error);
        });
        return defer.promise;
    }
}]);