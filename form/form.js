var userInfoModule = angular.module('UserInfoModule', []);
userInfoModule.controller('UserInfoCtrl', ['$scope', function ($scope) {
    $scope.userInfo = {
        email: "38280116@qq.com",
        password: "123456",
        autoLogin: true
    };
    $scope.getFormData = function () {
        console.log($scope.userInfo);
    }
    $scope.setFormData = function () {
        $scope.userInfo = {
            email: "machen0220@qq.com",
            password: "123456",
            autoLogin: false
        }
    }
    $scope.resetFormData = function(){
        $scope.userInfo = {
            email: "@qq.com",
            password: "456",
            autoLogin: true
        }
    }
}])