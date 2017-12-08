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



function showDiff(file1, file2){

    $.get(file1).then(data1=>{
        $.get(file2).then(data2=>{
            

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
            });
            
            $('#diffModal').modal({ show: true })

        })
    })
}

$('#test-diff-modal').on('click', function(){
    showDiff('../assets/output/sccollection-airbnb-default.js', '../assets/output/sccollection-standard-default.js')
})

    