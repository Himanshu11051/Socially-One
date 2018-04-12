/* Socially One App Config File
 * @Author: Himanshu
 */ 
var zenatixApp = {
    bootstrap : function(){
        angular.module('zenatixApp',['ui.router', 'ngResource', 'ngAnimate','login','dashboard']);
    },
    routerConfig : function(){
        angular.module('zenatixApp').config(['$urlRouterProvider', '$stateProvider','$provide',  function (urlRouterProvider, stateProvider,$provide) {

            urlRouterProvider.otherwise('login');
            
            stateProvider.state('login', {
                url: '/login',
                templateUrl: 'app/login-component/login.html',
                controller: 'loginCtrl'
            })
            .state('home', {
                url: '/home',
                templateUrl: 'app/shared-component/app-container.html',
                controller: 'sharedCtrl'
            });
                
            // $provide.factory('lbbAppUtil',function(){
            //     return{
            //         nullCheck : function(value){
            //             if(value != null && value != undefined && value != ''){
            //                 return true;
            //             }
            //             else{
            //                 return false;
            //             }
            //         }
            //     }

            // });
        }]);
    }
}
zenatixApp.bootstrap();
zenatixApp.routerConfig();