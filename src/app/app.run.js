export default function($rootScope) {
    'ngInject';
    $rootScope.$on('$routeChangeStart', function(e, curr, prev) {
        if (curr.$$route && curr.$$route.resolve) {
            if (curr.$$route.originalPath == '/') {
                $rootScope.animationClass = 'page-home';
            } else if (curr.$$route.originalPath == '/aboutus') {
                $rootScope.animationClass = 'page-about';
            } else if (curr.$$route.originalPath == '/help') {
                $rootScope.animationClass = 'page-contact';
            }
            $rootScope.loadingView = true;
        }
    });
    $rootScope.$on('$routeChangeSuccess', function(e, curr, prev) {
        // Hide loading message
        $rootScope.loadingView = false;
    });
}
