// files is Array<Array<String>> already defined



var editor
function showEditCodeModal(config) {
    $.get(config.path).then(function (data) {
        var target = $('.editor-container')
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

$('.edit-file-button').click(function (event) {
    $('#editCodeModal').modal({ show: true })
    var inputFile = $(event.target).data('input-file')
    showEditCodeModal({ fileName: inputFile, path: inputFile })
})



function showDiff(file1, file2) {
    $.when($.get(file1), $.get(file2)).then(function (data1, data2) {
        //TODO errors ?
        data1 = data1[0]
        data2 = data2[0]
        var differ = new AceDiff({
            mode: "ace/mode/javascript",
            left: {
                id: "editor1",
                content: data1
            },
            right: {
                id: "editor2",
                content: data2
            },
            classes: {
                gutterID: "gutter"
            }
        })

        $('#diffModal').modal({ show: true })
    })
}

$('#open-diff-modal').on('click', function () {
    var selected = $('.file-diff:checked').toArray().map(e => $(e).attr('data-input-file'))
    if (selected.length == 2) {
        showDiff(selected[0], selected[1])
    }
    else {
        alert('You must select two files in order to see a diff')
    }
})

