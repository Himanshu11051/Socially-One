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
                }
            }
        }]);
    }	
};
dashboardResource.dashboardService();