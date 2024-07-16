let selecionadocomida = null
let selecionadobebida = null
let selecionadosobremesa = null

let tcomida = null
let tbebida = null
let tsobremesa = null

let pcomida = null
let pbebida = null
let psobremesa = null

let total = null

function comida(botao){
    const selecionadoantescomida = document.querySelector(".pratos .selecionado")
    const selecionadoantescheck = document.querySelector(".pratos .selecionado .nvl1")
    if(selecionadoantescomida!== null){
        selecionadoantescheck.classList.add("escondido")
        selecionadoantescomida.classList.remove("selecionado");
    }
    botao.classList.add("selecionado")
    const check = document.querySelector(".pratos .selecionado .nvl1")
    check.classList.remove("escondido")
    selecionados()
}

function bebida(botao){
    const selecionadoantesbebida = document.querySelector(".bebidas .selecionado")
    const selecionadoantescheck = document.querySelector(".bebidas .selecionado .nvl1")
    if(selecionadoantesbebida!== null){
        selecionadoantescheck.classList.add("escondido")
        selecionadoantesbebida.classList.remove("selecionado");
    }
    botao.classList.add("selecionado")
    selecionados()
    const check = document.querySelector(".bebidas .selecionado .nvl1")
    check.classList.remove("escondido")
}

function sobremesa(botao){
    const selecionadoantessobremesa = document.querySelector(".sobremesa .selecionado")
    const selecionadoantescheck = document.querySelector(".sobremesa .selecionado .nvl1")
    if(selecionadoantessobremesa!== null){
        selecionadoantescheck.classList.add("escondido")
        selecionadoantessobremesa.classList.remove("selecionado");
    }
    botao.classList.add("selecionado")
    selecionados()
    const check = document.querySelector(".sobremesa .selecionado .nvl1")
    check.classList.remove("escondido")
}

function selecionados(){
    selecionadocomida = document.querySelector(".pratos .selecionado")
    selecionadobebida = document.querySelector(".bebidas .selecionado")
    selecionadosobremesa = document.querySelector(".sobremesa .selecionado")

    if(selecionadocomida !== null && selecionadobebida !== null && selecionadosobremesa !== null){
        const elemento = document.querySelector("h5");
        elemento.innerHTML = "Fechar pedido";
        const back = document.querySelector(".concluir");
        back.classList.add("verde")
    }
}
function concluir(){
    const elemento = document.querySelector("h5");
    if(elemento.innerHTML === "Fechar pedido"){
        const mascara = document.querySelector(".mascara");
        const pedir = document.querySelector(".pedir");
        mascara.classList.remove("escondido");
        pedir.classList.remove("escondido");


        // --- COLOCAR O NOME DOS SELECIONADOS PARA CONFIRMAÇÃO DOS PEDIDOS
        tcomida = document.querySelector(".pratos .selecionado .nome");
        tbebida = document.querySelector(".bebidas .selecionado .nome");
        tsobremesa = document.querySelector(".sobremesa .selecionado .nome");
        tcomida = tcomida.innerHTML;
        tbebida = tbebida.innerHTML;
        tsobremesa = tsobremesa.innerHTML;
        const elemento1 = document.querySelector(".pedidocomida .pedido");
        elemento1.innerHTML = tcomida;

        const elemento2 = document.querySelector(".pedidobebida .pedido");
        elemento2.innerHTML = tbebida;

        const elemento3 = document.querySelector(".pedidosobremesa .pedido");
        elemento3.innerHTML = tsobremesa;

        // --- COLOCAR O PREÇO DOS SELECIONADOS PARA CONFIRMAÇÃO DOS PEDIDOS
        
        pcomida = document.querySelector(".pratos .selecionado .preco p");
        pbebida = document.querySelector(".bebidas .selecionado .preco p");
        psobremesa = document.querySelector(".sobremesa .selecionado .preco p");
        

        pcomida = pcomida.innerHTML;
        pbebida = pbebida.innerHTML;
        psobremesa = psobremesa.innerHTML;
        const p1 = document.querySelector(".pedidocomida .Preco");
        p1.innerHTML = `R$ ${pcomida}`;

        const p2 = document.querySelector(".pedidobebida .Preco");
        p2.innerHTML = `R$ ${pbebida}`;

        const p3 = document.querySelector(".pedidosobremesa .Preco");
        p3.innerHTML = `R$ ${psobremesa}`;

        // --- SOMAR VALORES ESCOLHIDOS TROCANDO "," POR "."

        var n1 = parseFloat(pcomida.replace(',', '.'));
        var n2 = parseFloat(pbebida.replace(',', '.'));
        var n3 = parseFloat(psobremesa.replace(',', '.'));

        var num = (n1 + n2 + n3)
        num = num.toFixed(2)

        total = (num.replace('.', ','));
        // --- COLOCAR A SOMA NO TOTAL

        ptotal = document.querySelector(".totalpedidos .Ptotal");
        ptotal.innerHTML = `R$ ${total}`;
    }
}

function pedir(opcao){
    if(opcao.classList.contains("confirmar")){
        
        let inicio = `Olá, gostaria de fazer o pedido: \n`
        let enviar_comida = `- Prato: ${tcomida} \n`
        let enviar_bebida = `- Bebida: ${tbebida} \n`
        let enviar_sobremesa = `- Sobremesa: ${tsobremesa} \n`
        let enviar_total = `Total: R$ ${total} \n`
        let texto = `${inicio} ${enviar_comida} ${enviar_bebida} ${enviar_sobremesa} ${enviar_total}`

        texto = encodeURIComponent(texto)
        
        window.location.href=`https://wa.me/5584991503454/?text=${texto}`
        }
    else{
        let sair = document.querySelector(".mascara")
        sair.classList.add("escondido");
    }
}