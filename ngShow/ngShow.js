var ngShowModule = angular.module('NgShowModule', [])
ngShowModule.controller('ngShowCtr', ['$scope', function ($scope) {
    $scope.show =false
    $scope.changeShow = function () {
        $scope.show = !$scope.show;
    }
}])