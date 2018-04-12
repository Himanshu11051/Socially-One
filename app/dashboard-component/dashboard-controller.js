/* Dashboard Controller File
 * @Author: Himanshu
 */ 
var dashboardActions = {
    dashboardCtrl : function(){
        angular.module('dashboard').controller('dashboardCtrl',['$rootScope','$scope', '$state','dashboardService',function($rootscope, $scope, $state,dashboardService){
            var authorize = dashboardService.requestToken();
            var userTimeline = dashboardService.twitterHomeTimeline();
            $scope.requestToken = {};
            $scope.getUserTimelineRequest = {};
            $scope.requestToken.oauth_callback = "http://127.0.0.1:5500/index.html#!/home/dashboard";
            $('#configureAppModal').modal('show');
            $scope.getRequestToken = function(){
                $scope.getUserTimelineRequest.count = 5;
                $scope.getUserTimelineRequest.trim_user = true;
                $scope.getUserTimelineRequest.trim_user = false;
                userTimeline.getdata({},$scope.getUserTimelineRequest).$promise.then(function(data) {
                    if(data != undefined && data != null){
							alert(JSON.stringify(data)); 
                    }
                    else{
                        console.log('failure');
                    }
                },
                function(error) {
                    console.log('Rejected');
                });
            };			

        }]);
    },
};
dashboardActions.dashboardCtrl();