'use strict';

// import styles1 from 'bootstrap/dist/css/bootstrap.min.css';
// import styles2 from '../styles/stickynotes.css';

import {ngRoute} from 'angular-route';
import {ngAnimate} from 'angular-animate';

import {NoteApp} from './note';
// import {AboutusApp} from 'AboutusApp';
// import {HelpApp} from 'HelpApp';

import {appRun} from './app.run';
import {appConfig} from './app.config';

const app = angular.module('MakeNoteApp', ['ngRoute', 'ngAnimate' , NoteApp.name , 'AboutusApp', 'HelpApp']); 
app.run(appRun);
app.config(appConfig);

angular.module('AboutusApp', []);
angular.module('HelpApp', []);

