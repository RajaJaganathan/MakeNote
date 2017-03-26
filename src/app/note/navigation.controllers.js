export default class NavigationCtrl {
     constructor($location) {
         'ngInject';
         this.$location = $location;
     }

     isActive(route) {
         return route == this.$location.path();
     }
 }