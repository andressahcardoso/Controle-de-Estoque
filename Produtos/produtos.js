var x = document.querySelector("#icone_menu_exit");
var y = document.querySelector("#icone_menu");

y.parentNode.replaceChild(y, x)

var count = 1

function menu_dropdown() {

    if (count == 1) {
        y.parentNode.replaceChild(x, y)
        count = 2
        console.log(1)
    }

    else {
        x.parentNode.replaceChild(y, x)
        count = 1
        console.log(2)
    }
}


var nome_relatorio = 'Produtos'

function teste() {
    var doc = new jsPDF()
    doc.text('Tabela de Produtos', 10, 10)
    doc.save(nome_relatorio+'.pdf')

    var doc = new jsPDF({
        orientation: 'landscape',
        unit: 'cm',
        format: 'letter'
    })
}

