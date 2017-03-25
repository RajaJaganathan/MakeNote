import {NoteCtrl , NavigationCtrl} from './controllers';
import {NoteService} from './services';
import {mnContenteditable, mnNote} from './directives';
import elispeText from './filters';


var app = angular.module('NoteApp', []);

app.controller('NoteCtrl', NoteCtrl);
app.controller('NavigationCtrl', NavigationCtrl);

app.directive('mnContenteditable', mnContenteditable);
app.directive('mnNote', mnNote);

app.service('NoteService', NoteService);
app.filter('elispeText', elispeText);



export {app as NoteApp};