const angular = require('angular');

import {NoteCtrl , NavigationCtrl} from './controllers';
import {NoteService} from './services';
import {mnContenteditable, mnNote} from './directives';

const app = angular.module('NoteApp', []);

app.controller('NoteCtrl', NoteCtrl);
app.controller('NavigationCtrl', NavigationCtrl);

app.directive('mnContenteditable', mnContenteditable);
app.directive('mnNote', mnNote);

app.service('NoteService', NoteService);

export {app as NoteApp};