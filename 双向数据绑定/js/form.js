/**
 * Created by Raj on 2017/8/17.
 */
var userInfoModule = angular.module('userInfoModule', []);

userInfoModule.controller('UserInfoCtrl', function ($scope) {
    $scope.userInfo = {
        email: "raj6666@163.com",
        password: "123456",
        autoLogin: true
    }

    $scope.getFormData = function () {
        console.log($scope.userInfo);
    }

    $scope.setFormData = function () {
        $scope.userInfo = {
            email: "3763777639@163.com",
            password: "1232356",
            autoLogin: false
        }
    }

    $scope.resetForm = function () {
        $scope.userInfo = {
            email: "raj6666@163.com",
            password: "123456",
            autoLogin: true
        }
    }
});
