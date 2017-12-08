// files is Array<Array<String>> already defined


var editor
function showEditCodeModal(config) {
    $.get(config.path).then(function(data){
        var target = $('.editor-test-1')
        if (!editor) {
            editor = ace.edit(target.get(0))
            editor.getSession().setMode('ace/mode/javascript')
        }
        editor.setValue(data)
        target.focus()
        $('.modal-title').text(config.fileName)
    })
    //TODO: not found error
}

$('.edit-file-button').click(function(event) {
    $('#editCodeModal').modal({ show: true })
    var inputFile = $(event.target).data('input-file')
    showEditCodeModal({ fileName: inputFile, path: inputFile })
})