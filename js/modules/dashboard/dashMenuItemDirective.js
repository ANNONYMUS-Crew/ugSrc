/**
 * Created by friend on 10/30/2016.
 */
"use strict";
angular.module("dashMenu").directive("dashMenuItems",function () {
    return{
        require:'^dashMenu',
        scope: {
            label:'@'
        },
        templateUrl: "directives/dashMenuItem.html",
        link: function (scope, el, attr, ctrl) {

        }
    };

});

