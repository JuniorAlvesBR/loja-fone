/*
1 - Ter a janela (brownser) na mão = OK - window
2 - Ter o HTML na mão = OK - document
3 - Pegar o Coração = OK - queryselector("classe")
4 - Pegar o clique no coração
5 - No momento que o usuario clicar, nós queremos mostrar um Texto na tela
*/

const $heart = window.document.querySelector(".-heart");

$heart.addEventListener("click", handleClick);

function handleClick() {
    // if ($heart.classList.contains("-active")) {
    //     $heart.classList.remove("-active");
    // } else {
    //     $heart.classList.add("-active");
    // }
    $heart.classList.toggle("-active");

}
