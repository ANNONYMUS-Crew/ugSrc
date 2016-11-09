/**
 * Created by friend on 10/16/2016.
 */

"use strict";

angular.module('footerbar').directive('footerBar', function () {
   return{
       transclude:true,
       controller: "footerController",
       templateUrl: "directives/footerbar.html"
   }
});