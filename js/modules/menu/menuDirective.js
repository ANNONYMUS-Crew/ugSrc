/**
 * Created by friend on 10/16/2016.
 */

"use strict";

angular.module('menubar').directive('menuBar', function () {
   return{
       transclude:true,
       controller: "footerController",
       templateUrl: "directives/menubar.html"
   }
});