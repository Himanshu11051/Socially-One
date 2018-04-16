/* App Constants File
 * @Author: Himanshu
 */
var appConstants = {
    constants: function () {
      angular.module('zenatixApp').constant('constants', {
        
        TWITTER : {
            API_URL: 'https://api.twitter.com/',
            CONSUMER_KEY: 'DW7W33Ur7eQ8GvmHXQJB3I4Or',
            CONSUMER__SECRET: 'sS0Zim7MLcYuHqKISKmaB5scbWeXVkys7479sydUQtWRWHzQtL',
            API_ACCESS_TOKEN: '984014203152404480-i24W4eA3aTAmbq53JndULYoj2ow18nW',
            API_ACCESS_TOKEN_SECRET: 'DaCUcBbPaIoSIyiOTolH6xqsllTAdWLn09LJcc4ZNXhO2',
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