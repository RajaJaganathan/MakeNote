mnNotification.$inject = ['$timeout'];

function mnNotification($timeout) {
    return {
        restrict: 'EA',
        template: '<div class="alert alert-success">Notification</div>',
        link: function(scope, element, attrs) {
            $timeout(function() {
                element.empty();
                element.hide();
            }, 5000);
        }
    }
}

export {
    mnNotification
}
