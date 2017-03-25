appConfig.$inject = ['$routeProvider', '$locationProvider'];

function appConfig($routeProvider, $locationProvider) {
    $routeProvider.
    when('/', {
        templateUrl: 'note-container',
        controller: 'NoteCtrl',
        resolve: {
            app: delayResolver
        }
    }).
    when('/aboutus', {
        templateUrl: 'app/aboutus/aboutus.html',
        resolve: {
            app: delayResolver
        }
    }).
    when('/help', {
        templateUrl: 'app/help/help.html',
        resolve: {
            app: delayResolver
        }
    }).otherwise({
        redirectTo: '/'
    });

//    $locationProvider.html5Mode(true);
}

delayResolver.$inject = ['$q', '$timeout'];

function delayResolver($q, $timeout) {
    var defer = $q.defer();
    $timeout(function() {
        defer.resolve();
    }, 0);
    return defer.promise;
}

export {
    appConfig
};
