/* App Controller File
 * @Author: Himanshu
 */ 
var appActions = {
    sharedCtrl : function(){
        angular.module('zenatixApp').controller('sharedCtrl',['$rootScope','$scope', '$state',function($rootscope, $scope, $state){
            
            $('#configureAppModal').modal('show');
        }]);
    },
};
appActions.sharedCtrl();