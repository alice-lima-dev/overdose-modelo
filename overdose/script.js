var contador = 0;
var quantidade = document.getElementById("id-qtd-itens");

function adicionarItem(){
    console.log("teste");
    contador++
    quantidade.innerHTML = `<td>${contador}</td>`
}
function removerProduto(){
    
    contador = 0
    quantidade.innerHTML = 0
    
}