/**
 * Created by friend on 10/30/2016.
 */
"use strict";
angular.module("dashMenu").directive("dashMenu",function () {
    return{
        scope:{

        },
        transclude:true,
        templateUrl: "directives/dashMenu.html",
        controller:"dashMenuController",
        link: function (scope, el, attr) {
            
        }
    };

});
