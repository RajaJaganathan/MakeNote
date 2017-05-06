export function mnContenteditable () {
  'ngInject';
  return {
    require: 'ngModel',
    link: function (scope, element, attrs, ngModelCtrl) {
      // view -> model
      element.bind('blur', function () {
        scope.$apply(function () {
          ngModelCtrl.$setViewValue(element.html());
        });
      });

      // model -> view
      ngModelCtrl.$render = function () {
        element.html(ngModelCtrl.$viewValue);
      };
    }
  };
}
