/* App Controller File
 * @Author: Himanshu
 */ 
var appActions = {
    sharedCtrl : function(){
        angular.module('zenatixApp').controller('sharedCtrl',['$rootScope','$scope', '$state',function($rootscope, $scope, $state){
            
           console.log('Welcome to Socially ONE');
        }]);
    },
};
appActions.sharedCtrl();