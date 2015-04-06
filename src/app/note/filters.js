(function() {

	"use strict";

    angular.module("NoteApp")
        .filter("elispeText", function() {
            return function(input) {
                if (input && input.length > 6) {
                    return input.substr(0, 6) + "...";
                }

                return input;
            }
        });
})();
