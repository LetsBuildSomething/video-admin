(function () {
    'use strict';

    angular.module('commonServices')
      .service('dataContext',function(connectInfo){

        this.getData = function(route){
            console.log(connectInfo.url);
            console.log(route);
            return 200;
        }
      });
})();
