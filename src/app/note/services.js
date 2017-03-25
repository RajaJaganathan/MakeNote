NoteService.$inject = ['$http'];

export function NoteService($http) {
    this.getNotes = function() {
        $http.get("mock-data/stickynotes.json").then(function(res) {
            return res.data;
        });
    }
}
