var x = document.querySelector("#icone_menu_exit");  /* Menu */
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


var nome_relatorio = 'Produtos'  /* Exportar em PDF */

function PDF() {
    console.log("Tabela PDF")
    
    var doc = new jsPDF()
    doc.text('Tabela de Produtos', 10, 10)
    doc.save(nome_relatorio+'.pdf')

    var doc = new jsPDF({
        orientation: 'landscape',
        unit: 'cm',
        format: 'letter'
    })
}







var contador = -1;
var botao1 = document.querySelector("#botao1");
var botao2 = document.querySelector("#botao2");


var verificaContador = function(){
    level = "Iniciante";
    document.querySelector("#status").textContent = "Status: " + level;
    if (contador < 10) {
        if (contador==0) {
            document.querySelector("#titulo").textContent = "Vamos allá!";
            document.querySelector("#texto").textContent = "Vamos para o México?";
            document.querySelector("#botao1").textContent = "Sim";
            document.querySelector("#botao2").textContent = "Não";
        }
        else if (contador==1) {
            document.querySelector("#titulo").textContent = "titulo1";
            document.querySelector("#texto").textContent = "Na próxima fase as decisões que você está prestes a tomar iram impactar profundamente na vida de seu personagem agora você se vê no cenário da sua nova casa ajudando sua irmã com a mudança e uma discussão na frente da calçada da sua casa caso se você intervir e acabar com a discussão o pessoal do bairro vai a ter respeito por você se você não intervir os vizinhos vão começar a brigar e danificando sua moradia resultando em um grande prejuízo.";
            document.querySelector("#botao1").textContent = "Opção 1";
            document.querySelector("#botao2").textContent = "Opção 2";
        }
        else if (contador==2) {
            document.querySelector("#titulo").textContent = "titulo2";
            document.querySelector("#texto").textContent = "Seu primeiro dia de aula finalmente chega após ter que ser acostumar com a cultura totalmente diferente de onde morava ela acaba vendo que quem ia dar aula pra ela era a mesma professora que dava as aulas onde ela morava antigamente o protagonista vendo isso fica até mais animado em saber disso e entra na sala com muita ela em seguida você vê que tem um garoto conhecido como Taylor está fazendo bullying com a aluna nova Sheron que está em silencio ele diz que o lugar dela não é ali e ela é a pessoa mais esquisita que ele já viu e que os óculos só deixavam ela com cara de estranha nessa parte você tem que decidir se vai intervir ou não caso se você intervir o Taylor irá tentar bater em você em seguida a diretora irá aparecer e vai leva-lo para sala dela Sheron vai te agradecer e vocês sentam juntas na aula assim se tornando amigas e se conhecendo melhor a cada dia caso você não se intrometa a Sheron vai encher o Taylor de porrada assim entrando com a reputação da garota mais casca grossa da escola .";
            document.querySelector("#botao1").textContent = "Opção 1";
            document.querySelector("#botao2").textContent = "Opção 2";
        }
        else if (contador==3) {
            document.querySelector("#titulo").textContent = "titulo3";
            document.querySelector("#texto").textContent = "Primeira prova do ano após todos os do capítulo passado os professores decidem aplicar uma prova de 50 questões para testar o nível de ensino dos anos anteriores.";
            document.querySelector("#botao1").textContent = "Opção 1";
            document.querySelector("#botao2").textContent = "Opção 2";
        }
        else if (contador==4) {
            document.querySelector("#titulo").textContent = "titulo4";
            document.querySelector("#texto").textContent = "Primeira prova do ano após todos os do capítulo passado os professores decidem aplicar uma prova de 50 questões para testar o nível de ensino dos anos anteriores.";
            document.querySelector("#botao1").textContent = "Opção 1";
            document.querySelector("#botao2").textContent = "Opção 2";
        }
        else if (contador==5) {
            document.querySelector("#titulo").textContent = "titulo5";
            document.querySelector("#texto").textContent = "Passeio escolar visitar um parque ecológico para compreender um pouco da vida ambiental do México.";
            document.querySelector("#botao1").textContent = "Opção 1";
            document.querySelector("#botao2").textContent = "Opção 2";
        }
        else if (contador==6) {
            document.querySelector("#titulo").textContent = "titulo6";
            document.querySelector("#texto").textContent = "Fim de semana festa ou família depois de uma semana difícil e bem estressante você é convidado para uma festa da escola que um cara do ensino médio 2 vai fazer mais tem um problema sua família está vindo de longe com uma grande surpresa.";
            document.querySelector("#botao1").textContent = "Opção 1";
            document.querySelector("#botao2").textContent = "Opção 2";
        }
        else if (contador==7) {
            document.querySelector("#titulo").textContent = "titulo7";
            document.querySelector("#texto").textContent = "Conversa com a diretora diz ela que o assunto é muito sério.";
            document.querySelector("#botao1").textContent = "Opção 1";
            document.querySelector("#botao2").textContent = "Opção 2";
        }
        else if (contador==8) {
            document.querySelector("#titulo").textContent = "titulo8";
            document.querySelector("#texto").textContent = "Após dois anos no Ensino médio as coisas finalmente começam a se encaixar e o baile de formatura acontece duas situações chocantes o Taylor te chama para conversar no meio do baile.";
            document.querySelector("#botao1").textContent = "Opção 1";
            document.querySelector("#botao2").textContent = "Opção 2";
        }
        else if (contador==9) {
            document.querySelector("#titulo").textContent = "titulo9";
            document.querySelector("#texto").textContent = "Família de novo? Sua família ficou preocupada com você e sua irmã e querem se mudar para o México para ficar junto a vocês.";
            document.querySelector("#botao1").textContent = "Opção 1";
            document.querySelector("#botao2").textContent = "Opção 2";
        }
    }
    else{
        document.querySelector("#titulo").textContent = level;
        document.querySelector("#texto").textContent = "Você passou pelos dez desafios. Baseado nas suas decisões você é "+level+"!";
    };
};

icone_filtro.addEventListener("click", function (event) {
    contador+=1;
    console.log (contador);
    verificaContador();
});
botao2.addEventListener("click", function (event) {
    contador+=1;
    console.log (contador);
    verificaContador();
});