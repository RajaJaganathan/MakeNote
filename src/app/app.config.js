import NoteApp from './note';

function appConfig($routeProvider, $locationProvider) {
    'ngInject';
    $routeProvider.
    when('/', {
        template: '<note-component></note-component>',
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

function delayResolver($q, $timeout) {
    'ngInject';
    var defer = $q.defer();
    $timeout(function() {
        defer.resolve();
    }, 0);
    return defer.promise;
}

export default appConfig;
