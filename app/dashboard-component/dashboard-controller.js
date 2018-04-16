/* Dashboard Controller File
 * @Author: Himanshu
 */ 
var dashboardActions = {
    dashboardCtrl : function(){
        angular.module('dashboard').controller('dashboardCtrl',['$rootScope','$scope', '$state','$window','dashboardService','constants',function($rootScope, $scope, $state, $window, dashboardService,constants){
            
            var userTimeline = dashboardService.twitterHomeTimeline();
            $scope.requestToken = {};
            $scope.getUserTimelineRequest = {};
            $scope.getInstaTimelineRequest = {};
            $scope.requestToken.oauth_callback = "http://127.0.0.1:5500/index.html#!/home/dashboard";
            $('#configureAppModal').modal('show');

            $scope.generateTwitterAuthorizationHeader = function(){
                var oAuth = {};
                oAuth.oauth_timestamp = Math.round(Date.now() / 1000);
                oAuth.oauth_consumer_key = constants.TWITTER.CONSUMER_KEY;
                oAuth.oauth_nonce = btoa(oAuth.oauth_consumer_key + ':' + oAuth.oauth_timestamp);
                oAuth.oauth_signature_method = 'HMAC-SHA1';
                oAuth.oauth_token = constants.TWITTER.API_ACCESS_TOKEN;
                oAuth.oauth_version = 1.0;
                oAuth.oauth_signature = oauthSignature.generate('GET', constants.TWITTER.API_URL+'oauth/authenticate', oAuth, constants.TWITTER.CONSUMER__SECRET, constants.TWITTER.API_ACCESS_TOKEN_SECRET,{ encodeSignature: false});
            };

            $scope.getRequestToken = function(){
                $scope.getUserTimelineRequest.count = 5;
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
                $window.location.href = constants.INSTAGRAM.API_URL+'oauth/authorize?client_id='+constants.INSTAGRAM.CLIENT_ID+'&redirect_uri='+constants.INSTAGRAM.REDIRECT_URI+'&response_type=code&scope=public_content'; 
            };

            $scope.getInstaFeeds = function(){
                $scope.getInstaTimelineRequest.count = 5;
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