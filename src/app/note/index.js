import {NoteCtrl , NavigationCtrl} from './note.controllers';
import {NoteService} from './note.service';
import {mnContenteditable, mnNote} from './note.directives';
import elispeText from './note.filters';


var app = angular.module('NoteApp', []);

app.controller('NoteCtrl', NoteCtrl);
app.controller('NavigationCtrl', NavigationCtrl);

app.directive('mnContenteditable', mnContenteditable);
app.directive('mnNote', mnNote);

app.service('noteService', NoteService);
app.filter('elispeText', elispeText);

export {app as NoteApp};