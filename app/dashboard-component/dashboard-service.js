/* LBB App Service File
 * @Author: Himanshu
 */ 

var dashboardResource = {
    dashboardService : function(){
        angular.module('dashboard').factory('dashboardService',['$resource','constants',function($resource,constants){
            return{
                authorizeTwitter : function(){
                    return $resource(constants.TWITTER.API_URL+'oauth/request_token',{},{setdata : {method : 'POST', headers : {'Content-Type': 'application/json','Access-Control-Allow-Origin': '*'} } })
                },
                authenticateTwitter : function() {
                    return $resource(constants.TWITTER.API_URL+'oauth/authenticate',{},{getdata : {method : 'GET', headers : {'Content-Type': 'application/json'} } })
                },
                twitterHomeTimeline : function(authHeader) {
                    return $resource(constants.TWITTER.API_URL+'search/tweets.json?q=nasa&result_type=popular',{},{getdata : {method : 'GET', headers : {'Content-Type': 'application/x-www-form-urlencoded','Access-Control-Allow-Origin': '*', 'Authorization': authHeader} } })
                },
                getInstaFeeds : function(getInstaTimelineRequest) {
                    return $resource(constants.INSTAGRAM.API_URL+'v1/users/self/media/recent?'+'&access_token='+getInstaTimelineRequest.access_token+'&count='+getInstaTimelineRequest.count,{},{getdata : {method : 'GET', headers : {'Content-Type': 'application/json'} } })
                }
            }
        }]);
    }	
};
dashboardResource.dashboardService();