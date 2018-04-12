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
      });
    }
  };
  appConstants.constants();