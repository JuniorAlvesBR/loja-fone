/*
1 - Ter a janela (brownser) na mão = OK - window
2 - Ter o HTML na mão = OK - document
3 - Pegar o Coração = OK - queryselector("classe")
4 - Pegar o clique no coração
5 - No momento que o usuario clicar, nós queremos mostrar um Texto na tela
*/

const $heart = document.querySelector(".-heart");
const $firstStar = document.querySelector(".star");

console.log($firstStar)

$heart.addEventListener("click", handleClickHeart);
$firstStar.addEventListener('click', handleClickFirstStar);

function handleClickHeart() {
    // if ($heart.classList.contains("-active")) {
    //     $heart.classList.remove("-active");
    // } else {
    //     $heart.classList.add("-active");
    // }
    $heart.classList.toggle("-active");
}

function handleClickFirstStar() {
    $firstStar.classList.toggle("-active");
}