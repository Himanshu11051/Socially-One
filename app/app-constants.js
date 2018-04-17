/* App Constants File
 * @Author: Himanshu
 */
var appConstants = {
    constants: function () {
      angular.module('zenatixApp').constant('constants', {
        
        TWITTER : {
            API_URL: 'https://api.twitter.com/',
            CONSUMER_KEY: 'CH1d8fTftATiaZWmEXPHtahjb',
            CONSUMER__SECRET: 'aUv6YVRbOr6sI8BBj15FXz2Rfm7v6ssBJoIZ4BON3IERy6qFYW',
            API_ACCESS_TOKEN: '3231238620-nkap42GACYuP8YZF7wIOMqamldIsujOEV4xhPJq',
            API_ACCESS_TOKEN_SECRET: '1CIpHZxEWA8hbdmALvTAjuUfTG8PiGUtAYjWpAox3R1PD',
        },
        INSTAGRAM : {
          API_URL: 'https://api.instagram.com/',
          CLIENT_ID: 'f59fcd8fa51541ff816834b830012d14',
          REDIRECT_URI: 'https://himanshu11051.github.io/#/home/dashboard',
        }
      });
    }
  };
  appConstants.constants();