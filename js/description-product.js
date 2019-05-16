/*
1 - Ter a janela (brownser) na mão = OK - window
2 - Ter o HTML na mão = OK - document
3 - Pegar o Coração = OK - queryselector("classe")
4 - Pegar o clique no coração
5 - No momento que o usuario clicar, nós queremos mostrar um Texto na tela
*/

// Simplificando todo o conteudo do código abaixo:

const $heart = document.querySelector(".-heart");
const $stars = document.querySelectorAll(".star")

$heart.addEventListener("click", handleClick);

$stars.forEach(function($star) {
    $star.addEventListener("click", handleClick);
})

function handleClick() {
    this.classList.toggle("-active");
}


/*
// BLoco de configuração do Coração
const $heart = document.querySelector(".-heart");
$heart.addEventListener("click", handleClickHeart);

function handleClickHeart() {
    $heart.classList.toggle("-active");
}

//Bloco de configuração do Coração mais manual


function handleClickHeart(){
    if ($heart.classList.contains("-active")) {
        $heart.classList.remove("-active");
    } else {
        $heart.classList.add("-active");
    }
}


// =========================

// Bloco de configuração das Estrelas
const $stars = document.querySelectorAll(".star"); // Com querySelectoAll eu crio uma lista com todos os .star do html

$stars.forEach(function($star) {
    $star.addEventListener("click", handleClickStar);
})

function handleClickStar() {
    this.classList.toggle("-active");
}


// Bloco de configuração das estrela de forma mais manual


const $firstStar = document.querySelector(".star"); // Com querySelector eu pego o primiero .star de todos os .star do html
$firstStar.addEventListener("click", handleClickFirstStar);

$stars[0].addEventListener("click", handleClickStar0);
$stars[1].addEventListener("click", handleClickStar1);
$stars[2].addEventListener("click", handleClickStar2);
$stars[3].addEventListener("click", handleClickStar3);
$stars[4].addEventListener("click", handleClickStar4);

function handleClickFirstStar() {
    $firstStar.classList.toggle("-active");
}

function handleClickStar0() {
    $star[0].classList.toggle("-active");
}
function handleClickStar1() {
    $star[1].classList.toggle("-active");
}
function handleClickStar2() {
    $star[2].classList.toggle("-active");
}
function handleClickStar3() {
    $star[3].classList.toggle("-active");
}
function handleClickStar4() {
    $star[4].classList.toggle("-active");
}
*/
