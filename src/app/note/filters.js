(function() {

	"use strict";

    angular.module("NoteApp")
        .filter("elispeText", function() {
            return function(input) {
                if (input && input.length > 15) {
                    return input.substr(0, 15) + "...";
                }
                return input;
            }
        });
})();
