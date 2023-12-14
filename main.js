$('document').ready(function() {
    $('form').on('submit', function(e) {
        e.preventDefault()
        const valorTarefa = $('#tarefa').val()
        const novoItem = $('<li></li>')
        $(`<p>${valorTarefa}<p>`).appendTo(novoItem)
        $(novoItem).appendTo('ul')
        $('#tarefa').val('')

    })

    $('ul li').on("click", function() {
        $(this).addClass("ativo")
    })
    
})