'use strict';

import {ngRoute} from 'angular-route';
import {ngAnimate} from 'angular-animate';
// import {NoteApp} from 'NoteApp';
// import {AboutusApp} from 'AboutusApp';
// import {HelpApp} from 'HelpApp';

import {NoteCtrl , NavigationCtrl} from './note/controllers';
import {NoteService} from './note/services';
import {appRun} from './app.run';
import {appConfig} from './app.config';

console.log(NoteCtrl);
console.log(NavigationCtrl);

const app = angular.module('MakeNoteApp', ['ngRoute', 'ngAnimate' /*, 'NoteApp', 'AboutusApp', 'HelpApp'*/]); 

app.controller('NoteCtrl', NoteCtrl);
// app.controller('NavigationCtrl', NavigationCtrl);
app.service('NoteService', NoteService);

// app.run(appRun);
// app.config(appConfig);

angular.module('NoteApp', []);
angular.module('AboutusApp', []);
angular.module('HelpApp', []);

