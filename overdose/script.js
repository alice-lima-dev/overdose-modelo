var contador = 0
var quantidade = document.getElementById("quantidade")

function adicionarItem(){
    contador++
    quantidade.innerHTML = '<td>${quantidade}</td>'
}
function removerProduto(){
    
    contador = 0
    quantidade.innerHTML = 0
    
}