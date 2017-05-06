export default class noteService {
  constructor ($http) {
    'ngInject';
    this.$http = $http;
  }

  getNotes () {
    return this.$http.get('mock-data/stickynotes.json').then(function (res) {
      return res.data;
    });
  }
}
