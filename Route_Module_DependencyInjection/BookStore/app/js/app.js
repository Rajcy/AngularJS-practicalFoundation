//多模块加载时模块切分的方式
//把控制器，过滤器，service定义成多个js文件
//如下的angular.module作为启动点（'bookStoreApp），依赖其他所有模块
//然后等待其他的这些js文件加载完成
//[]内部的字符串即——依赖注入。 ng开头的是angularJS本身提供的模块
var bookStoreApp = angular.module('bookStoreApp', [
    'ngRoute', 'ngAnimate', 'bookStoreCtrls', 'bookStoreFilters',
    'bookStoreServices', 'bookStoreDirectives'
]);

//$routeProvider只有两个方法：when与otherwise（可参数化）
//用于不同的视图，交给不同的控制器去管理
//template与controller结合生成新的html（显示在index的ng-view里面）
bookStoreApp.config(function($routeProvider) {
    $routeProvider.when('/hello', {
        templateUrl: 'tpls/hello.html',
        controller: 'HelloCtrl'
    }).when('/list',{
    	templateUrl:'tpls/bookList.html',
    	controller:'BookListCtrl'
    }).otherwise({
        redirectTo: '/hello'
    })
});
