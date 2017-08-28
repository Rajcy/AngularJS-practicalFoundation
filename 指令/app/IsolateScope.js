var myModule = angular.module("MyModule", []);
//scope:{}用于创建独立作用域，即指令之间不相互影响
myModule.directive("hello", function() {
    return {
        restrict: 'AE',
        scope:{},
        template: '<div><input type="text" ng-model="userName"/>{{userName}}</div>',
        replace: true
    }
});
