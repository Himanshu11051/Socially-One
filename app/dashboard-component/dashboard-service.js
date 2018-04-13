/* LBB App Service File
 * @Author: Himanshu
 */ 

var dashboardResource = {
    dashboardService : function(){
        angular.module('dashboard').factory('dashboardService',['$resource','constants',function($resource,constants){
            return{
                requestToken : function(){
                    return $resource(constants.TWITTER.API_URL+'oauth/request_token',{},{setdata : {method : 'POST', headers : {'Content-Type': 'application/json','Access-Control-Allow-Origin': '*'} } })
                },
                authenticateTwitter : function() {
                    return $resource(constants.TWITTER.API_URL+'oauth/authenticate',{},{getdata : {method : 'GET', headers : {'Content-Type': 'application/json'} } })
                },
                twitterHomeTimeline : function() {
                    return $resource(constants.TWITTER.API_URL+'1.1/statuses/home_timeline.json',{},{getdata : {method : 'GET', headers : {'Content-Type': 'application/x-www-form-urlencoded'} } })
                },
                getInstaFeeds : function(getInstaTimelineRequest) {
                    return $resource(constants.INSTAGRAM.API_URL+'v1/media/search?'+'lat='+getInstaTimelineRequest.lat+'&lng='+getInstaTimelineRequest.lng+'&access_token='+getInstaTimelineRequest.access_token+'&distance=5000',{},{getdata : {method : 'GET', headers : {'Content-Type': 'application/json'} } })
                }
            }
        }]);
    }	
};
dashboardResource.dashboardService();