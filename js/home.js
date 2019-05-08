let valorInicial = 10;
const $second = window.document.querySelector(".-second");


$second.addEventListener("click", handleclick);

function handleclick() {
    const $action = window.document.querySelector(".-last")
    
    $action.textContent = `Carrinho (${++valorInicial})`;

}
