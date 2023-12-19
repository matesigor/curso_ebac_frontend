$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown()
    })

    $('#botao-cancelar').click(function() {
        $('form').slideUp()
    })

    $('form').on('submit', function(e) {
        e.preventDefault()
        const enderecoDaNovaTarefa = $('#endereco-tarefa-nova').val()
        const novoItem = $('<li></li>')
        $(`<p>${enderecoDaNovaTarefa}<p/>`).appendTo(novoItem)
        $(novoItem).appendTo('ul')
        $('p').click(function() {
            $(novoItem).toggleClass( "riscado" );
        });
        $('#endereco-tarefa-nova').val('')
    })
})