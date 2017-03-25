NoteService.$inject = ['$http'];

export function NoteService($http) {
    this.getNotes = function() {
        return $http.get("mock-data/stickynotes.json").then(function(res) {
            return res.data;
        });
    }
}
