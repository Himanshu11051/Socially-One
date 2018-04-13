/* App Constants File
 * @Author: Himanshu
 */
var appConstants = {
    constants: function () {
      angular.module('zenatixApp').constant('constants', {
        
        TWITTER : {
            API_URL: 'https://api.twitter.com/',
            API_KEY: 'DW7W33Ur7eQ8GvmHXQJB3I4Or',
            API_SECRET: 'sS0Zim7MLcYuHqKISKmaB5scbWeXVkys7479sydUQtWRWHzQtL'
        },
        INSTAGRAM : {
          API_URL: 'https://api.instagram.com/',
          CLIENT_ID: 'f59fcd8fa51541ff816834b830012d14',
          REDIRECT_URI: 'http://127.0.0.1:5500/',
        }
      });
    }
  };
  appConstants.constants();