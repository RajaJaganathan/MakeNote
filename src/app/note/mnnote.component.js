export const mnNote = {
    bindings: {
        note: '=',
        onAdd: '&',
        onDelete: '&',
        onSave: '&',
        onUpdateData: '&',
        onColorChanger: '&'
    },
    templateUrl: 'app/note/mnnote.html',
    controller: class Note {
        constructor($element, $filter) {
            'ngInject';
            this.$element = $element;
            this.$filter = $filter;
        }

        onUpdateData() {
            this.note.title = this.$element.children().eq(0).find('p').html();
            this.note.content = this.$element.children().eq(1).find('p').html();
            this.note.title = $filter('elispeText')(this.note.title);
        }

        myColorChanger(note) {
            this.onColorChanger({
                note: note
            });
        }
    }
}
