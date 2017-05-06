export function mnNotification ($timeout) {
  'ngInject';
  return {
    restrict: 'EA',
    template: `<div class="alert alert-success">Application loaded !</div>`,
    link: function (scope, element, attrs) {
      $timeout(function () {
        element.empty();
        element.hide();
      }, 5000);
    }
  };
}
