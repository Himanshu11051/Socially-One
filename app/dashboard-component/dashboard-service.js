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
                    return $resource(constants.TWITTER.API_URL+'1.1/search/tweets.json?q=nasa&result_type=popular',{},{getdata : {method : 'GET', headers:{'Content-Type' : 'application/x-www-form-urlencoded', 'Authorization': authHeader} } })
                },
                getInstaFeeds : function(getInstaTimelineRequest) {
                    return $resource(constants.INSTAGRAM.API_URL+'v1/users/self/media/recent?'+'&access_token='+getInstaTimelineRequest.access_token+'&count='+getInstaTimelineRequest.count,{},{getdata:{method : 'GET', headers:{'Content-Type' : 'application/json'}}});
                },
                fetchCaseList : function(){
                    return $resource(constants.HIVR_API_ENDPOINT+'/fetchCases',{},{getdata:{method : 'POST',headers:{'Content-Type' : 'application/json','authToken': localStorage.getItem('authToken')}}});
                },
            }
        }]);
    }	
};
dashboardResource.dashboardService();