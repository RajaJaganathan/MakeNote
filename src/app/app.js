import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/stickynotes.css';

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
