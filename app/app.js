"use strict";

angular.module("app", ["ui.router", "footerbar", "menubar","dashMenu"]);

//Setting the routes
angular.module("app").config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {
    //home page
     $urlRouterProvider.otherwise("/");

    $stateProvider

    //home
        .state("homePage", {
            url: "/",
            templateUrl: "app/content/homePage.html"
        })
    //     //about
    //     .state("aboutPage", {
    //         url: "/about",
    //         templateUrl: "app/Content/.html"
    //     })
        //contact
            .state("logInPage", {
             url: "/logIn",
             templateUrl: "app/content/logIn.html"
         })

        //Dashboard
        .state("dashboard", {
            url: "/AdminDashboard",
            templateUrl: "app/content/adminDashboard.html"
        })

}]);