const btn = document.getElementById('btn-order')

btn.addEventListener('click',  () => fazerPedido())


function fazerPedido() {
    let confirmacao = confirm('Quer fazer um pedido?')

    if(confirmacao) {
        alert('Pedido feito ☕❤️')
    } else {
        alert('Pedido não realizado ☕💔')
    }
}