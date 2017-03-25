mnContenteditable.$inject = [];

function mnContenteditable() {
    return {
        require: 'ngModel',
        link: function(scope, element, attrs, ngModelCtrl) {
            // view -> model
            element.bind('blur', function() {
                scope.$apply(function() {
                    ngModelCtrl.$setViewValue(element.html());
                });
            });

            // model -> view
            ngModelCtrl.$render = function() {
                element.html(ngModelCtrl.$viewValue);
            };
        }
    }
}

mnNote.$inject = ['$filter'];

function mnNote($filter) {
    return {
        restrict: "EA",
        replace: true,
        scope: {
            note: "=",
            onAdd: "&",
            onDelete: "&",
            onSave: "&",
            onUpdateData: "&",
            onColorChanger: "&",
        },
        templateUrl: "app/note/note.html",
        link: function(scope, element, attrs) {

            scope.onUpdateData = function() {
                // note.content = angular.element(event.target).html();
                scope.note.title = element.children().eq(0).find("p").html();
                scope.note.content = element.children().eq(1).find("p").html();
                scope.note.title = $filter('elispeText')(scope.note.title);
            }

            scope.myColorChanger = function(note) {
                console.log("event interceptor");
                scope.onColorChanger({
                    note: note
                });
            }
        }
    }
}

export {
    mnContenteditable,
    mnNote
};
