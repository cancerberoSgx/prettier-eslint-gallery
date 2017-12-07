// inputFile is a string

function showEditCodeModal(config) {
    $.get(config.path).then(data => {
        var editor
        var target = $('.editor-test-1')
        if (!editor) {
            editor = ace.edit(target.get(0))
            editor.getSession().setMode('ace/mode/javascript')
        }
        editor.setValue(data)
        target.focus()
        $('.modal-title').text(config.fileName)
    })
    //TODO: not foundd
}

$('.edit-file-button').click(() => {
    $('#editCodeModal').modal({ show: true })
    showEditCodeModal({ fileName: inputFile, path: inputFile })
})