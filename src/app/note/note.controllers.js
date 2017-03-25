﻿ 'use strict';

 import bootbox from 'bootbox';

 NoteCtrl.$inject = ['$scope', '$q', 'noteService'];

 function NoteCtrl($scope, $q, noteService) {
     "use strict";

     $scope.note = {};
     $scope.title = "Lorem ipsum";
     $scope.content = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit";
     $scope.category = "";
     $scope.color = "#ffffcc";

     var colors = ["#ffffcc", "#d3fdb5" /*Green*/ , "#8fe5fe" /*blue*/ , "#ff6df1", "#c38af3"];

     $scope.notes = [{}];

     $scope.init = function() {
         return noteService.getNotes().then(function(data) {
             $scope.notes = data;
             return data;
         });
     }

     $scope.addNote = function() {
         var note = {};
         note.title = $scope.title;
         note.content = $scope.content;
         note.category = $scope.category;
         note.color = $scope.color;
         $scope.notes.push(note);
     }

     $scope.saveNote = function(note) {
         console.log("save Notes", note);
     };

     $scope.deleteNote = function(note) {
         bootbox.dialog({
             message: "Do you want to delete the note ?",
             title: "Delete Note",
             buttons: {
                 danger: {
                     label: "Delete!",
                     className: "btn-danger",
                     callback: function() {
                         $scope.$apply(function() {
                             $scope.notes.splice($scope.notes.indexOf(note), 1);
                         });
                     }
                 },
                 main: {
                     label: "Cancel!",
                     className: "btn-primary"
                 }
             }
         });
     }

     $scope.changeColor = function(note, $event) {
         var randomIndex = Math.random() * colors.length;
         note.color = colors[parseInt(randomIndex)];
     }

     $scope.init();
 }

 NavigationCtrl.$inject = ['$scope', '$location'];

 function NavigationCtrl($scope, $location) {
     $scope.isActive = function(route) {
         return route == $location.path();
     }
 }

 export {
     NoteCtrl,
     NavigationCtrl
 };