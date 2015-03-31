angular.module("NoteApp")
.service("NoteService", function ($http, $q) {
    "use strict";

    this.getNotes = function () {
        var deferred = $q.defer();
        $http.get("assets/data/stickynotes.json").success(function (data) {
            deferred.resolve(data);
        });

        return deferred.promise;
    }
});