/* App Controller File
 * @Author: Himanshu
 */ 
var loginActions = {
    loginCtrl : function(){
        angular.module('login').controller('loginCtrl',['$rootScope','$scope', '$state',function($rootscope, $scope, $state){
            
            $scope.login = function(){
                $state.go('home');
            };
            
        }]);
    },
};
loginActions.loginCtrl();