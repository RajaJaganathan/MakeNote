export const navbar = {
    restrict: 'E',
    templateUrl: 'app/layout/navbar.html',
    controller: class NavigationCtrl {
        constructor($location) {
            'ngInject';
            this.$location = $location;
        }

        isActive(route) {
            return route == this.$location.path();
        }
    }
};
