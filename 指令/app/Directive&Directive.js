var myModule = angular.module("MyModule", []);
//scope为独立作用域
//controller内暴露了3个public方法，提供给外部来调用，指令内部的controller
//link 处理指令内部的事务，如元素绑定事件，元素绑定数据等
myModule.directive("superman", function() {
    return {
        scope: {},
        restrict: 'AE',
        controller: function($scope) {
            $scope.abilities = [];
            this.addStrength = function() {
                $scope.abilities.push("strength");
            };
            this.addSpeed = function() {
                $scope.abilities.push("speed");
            };
            this.addLight = function() {
                $scope.abilities.push("light");
            };
        },
        link: function(scope, element, attrs) {
            element.addClass('btn btn-primary');
            element.bind("mouseenter", function() {
                console.log(scope.abilities);
            });
        }
    }
});

//require 表示指令间的依赖，strength依赖于superman
myModule.directive("strength", function() {
    return {
        require: '^superman',
        link: function(scope, element, attrs, supermanCtrl) {
            supermanCtrl.addStrength();
        }
    }
});
myModule.directive("speed", function() {
    return {
        require: '^superman',
        link: function(scope, element, attrs, supermanCtrl) {
            supermanCtrl.addSpeed();
        }
    }
});
myModule.directive("light", function() {
    return {
        require: '^superman',
        link: function(scope, element, attrs, supermanCtrl) {
            supermanCtrl.addLight();
        }
    }
});
