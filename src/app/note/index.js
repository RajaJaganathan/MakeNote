import NoteService from './note.service';
import {mnContenteditable} from './contenteditable.directives';
import {mnNote} from './mnnote.component';
import {elispeText} from './note.filters';
import NoteComponent from './note.component';

export default angular.module('NoteApp', [])
  .directive('mnContenteditable', mnContenteditable)
  .component('mnNote', mnNote)
  .component('noteComponent', NoteComponent)  
  .service('noteService', NoteService)
  .filter('elispeText', elispeText);