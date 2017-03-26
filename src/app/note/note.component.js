import bootbox from 'bootbox';

export default {
    bindings: {},
    template: `<div class="stickynotes-container">
                        <mn-note ng-repeat="note in $ctrl.notes | filter:$ctrl.searchText" 
                            note="note" 
                            ng-model="note" 
                            on-add="$ctrl.addNote()" 
                            on-save="$ctrl.saveNote(note)"
                            on-delete="$ctrl.deleteNote(note)" 
                            on-update-data="$ctrl.onUpdateData(note,$event)" 
                            on-color-changer="$ctrl.onChangeColor(note)">
                        </mn-note>
                    </div>`,
    controller: class NoteCtrl {
        constructor($scope, $q, noteService) {
            'ngInject';
            this.$scope = $scope;
            this.$q = $q;
            this.noteService = noteService;
        }

        $onInit() {
            this.note = {};
            this.title = "Lorem ipsum";
            this.content = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit";
            this.category = "";
            this.color = "#ffffcc";
            this.colors = ["#ffffcc", "#d3fdb5" /*Green*/ , "#8fe5fe" /*blue*/ , "#ff6df1", "#c38af3"];
            this.notes = [{}];
            this.noteService.getNotes().then(data => {
                this.notes = data;
            });
        }

        addNote() {
            var note = {
                title: this.title,
                content: this.content,
                category: this.category,
                color: this.color
            };

            this.notes.push(note);
        }

        saveNote(note) {
            console.log("save Notes", note);
        };

        deleteNote(note) {
            bootbox.dialog({
                message: "Do you want to delete the note ?",
                title: "Delete Note",
                buttons: {
                    danger: {
                        label: "Delete!",
                        className: "btn-danger",
                        callback: () => {
                            this.$scope.$apply(() => {
                                this.notes.splice(this.notes.indexOf(note), 1);
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

        onChangeColor(note) {
            var randomIndex = Math.random() * this.colors.length;
            note.color = this.colors[parseInt(randomIndex)];
        }
    }
}
