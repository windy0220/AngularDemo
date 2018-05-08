var ngClassModule = angular.module('NgClassModule', [])
ngClassModule.controller('ngClassCtr', ['$scope', function ($scope) {
    $scope.text = "123456"
    $scope.isRed = false;
    $scope.isBlue = false;
    $scope.changeRed = function () {
        $scope.isRed = true;
    }
    $scope.changeBlue = function () {
        $scope.isBlue = true;
    }
    $scope.cleanColor = function () {
        $scope.isRed = false;
        $scope.isBlue = false;
    }
}])