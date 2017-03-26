import styles1 from 'bootstrap/dist/css/bootstrap.min.css';
import styles2 from '../styles/stickynotes.css';

import 'angular';
import 'angular-route';
import 'angular-animate';

import SharedApp from './shared/shared.module';
import NavbarApp from './layout';

import NoteApp from './note';
import AboutusApp from './aboutus';
import HelpApp from './help';

import appRun from './app.run';
import appConfig from './app.config';

export default angular
    .module('MakeNoteApp', [
        'ngRoute',
        'ngAnimate',
        NavbarApp.name,
        SharedApp.name,
        NoteApp.name,
        AboutusApp.name,
        HelpApp.name
    ])
    .config(appConfig)
    .run(appRun);
