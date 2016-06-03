(function () {

    "use strict";

    var app = angular.module("MakeNoteApp", ['ngRoute', 'ngAnimate', 'NoteApp', 'AboutusApp', 'HelpApp']);

    //angular.module("LoginApp", []);
    angular.module("NoteApp", []);
    angular.module("AboutusApp", []);
    angular.module("HelpApp", []);

    app.run(['$rootScope', function ($root) {
        $root.$on('$routeChangeStart', function (e, curr, prev) {
            if (curr.$$route && curr.$$route.resolve) {
                if (curr.$$route.originalPath == "/") {
                    $root.animationClass = "page-home";
                } else if (curr.$$route.originalPath == "/aboutus") {
                    $root.animationClass = "page-about";
                } else if (curr.$$route.originalPath == "/help") {
                    $root.animationClass = "page-contact";
                }
                $root.loadingView = true;
            }
        });
        $root.$on('$routeChangeSuccess', function (e, curr, prev) {
            // Hide loading message
            $root.loadingView = false;
        });
    }]).config(function ($routeProvider, $locationProvider) {
        $routeProvider.
            when('/', {
                templateUrl: "note-container",
                controller: "NoteCtrl",
                resolve: {
                    app: delayResolver
                }
            }).
            when('/aboutus', {
                templateUrl: "app/layout/aboutus.html",
                resolve: {
                    app: delayResolver
                }
            }).
            when('/help', {
                templateUrl: "app/layout/help.html",
                resolve: {
                    app: delayResolver
                }
            }).otherwise({
                redirectTo: '/'
            });
        // $locationProvider.html5Mode(true);
    });


    function delayResolver($q, $timeout) {
        var defer = $q.defer();
        $timeout(function () {
            defer.resolve();
        }, 0);
        return defer.promise;
    }

})();