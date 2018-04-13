/* Dashboard Controller File
 * @Author: Himanshu
 */ 
var dashboardActions = {
    dashboardCtrl : function(){
        angular.module('dashboard').controller('dashboardCtrl',['$rootScope','$scope', '$state','$window','dashboardService','constants',function($rootScope, $scope, $state, $window, dashboardService,constants){
            var authorize = dashboardService.requestToken();
            var userTimeline = dashboardService.twitterHomeTimeline();
            $scope.requestToken = {};
            $scope.getUserTimelineRequest = {};
            $scope.getInstaTimelineRequest = {};
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

            $scope.authorizeInstagram = function(){
                // $window.open(constants.INSTAGRAM.API_URL+'oauth/authorize?client_id='+constants.INSTAGRAM.CLIENT_ID+'&redirect_uri='+constants.INSTAGRAM.REDIRECT_URI+'&response_type=token');
                $window.location.href = constants.INSTAGRAM.API_URL+'oauth/authorize?client_id='+constants.INSTAGRAM.CLIENT_ID+'&redirect_uri='+constants.INSTAGRAM.REDIRECT_URI+'&response_type=token'; 
            };
            $scope.getInstaFeeds = function(){
                $scope.getInstaTimelineRequest.lat = '28.7041';
                $scope.getInstaTimelineRequest.lng = '77.1025';
                $scope.getInstaTimelineRequest.access_token = sessionStorage.twitterAccessToken;
                var getInstaTimeline = dashboardService.getInstaFeeds($scope.getInstaTimelineRequest);
                getInstaTimeline.getdata({},$scope.getInstaTimelineRequest).$promise.then(function(data) {
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
            if(sessionStorage.twitterAccessToken){
                $scope.getInstaFeeds ();
            }

        }]);
    },
};
dashboardActions.dashboardCtrl();