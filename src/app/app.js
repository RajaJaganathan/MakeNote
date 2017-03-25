import styles1 from 'bootstrap/dist/css/bootstrap.min.css';
import styles2 from '../styles/stickynotes.css';

import angular from 'angular';
import ngRoute from 'angular-route';
import ngAnimate from 'angular-route';

import sharedApp from './shared/shared.module';
import {NoteApp} from './note';
import AboutusApp from './aboutus';
import HelpApp from './help';

import {appRun} from './app.run';
import {appConfig} from './app.config';

const app = angular.module('MakeNoteApp', [
    'ngRoute', 
    'ngAnimate', 
    sharedApp.name,
    NoteApp.name, 
    AboutusApp.name, 
    HelpApp.name
]);  

app.config(appConfig);
app.run(appRun);