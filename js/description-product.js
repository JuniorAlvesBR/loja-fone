/*
1 - Ter a janela (brownser) na mão = OK - window
2 - Ter o HTML na mão = OK - document
3 - Pegar o Coração = OK - queryselector("classe")
4 - Pegar o clique no coração
5 - No momento que o usuario clicar, nós queremos mostrar um Texto na tela
*/

const $heart = document.querySelector(".-heart");
const $stars = document.querySelectorAll(".star");
const positionLast = $stars.length - 1;

$heart.addEventListener("click", handleClick);

$stars.forEach(function ($star, key) {
    if (key == 0) {
        $stars[key].addEventListener("click", firstStar);
    } 

    if (key > 0 && key < positionLast) {
        $stars[key].addEventListener("click", function () {
            midleStars(key);
        })
    }

    if (key == positionLast) {
            $stars[positionLast].addEventListener("click", lastStar);
        }
})

function handleClick() {
    this.classList.toggle("-active");
}

function firstStar() {
    $stars.forEach(function ($star) {
        $star.classList.remove("-active");
    })
    this.classList.add("-active");
}

function midleStars(index) {
    $stars.forEach(function ($star, key) {
        $star.classList.remove("-active");
        if (key <= index) {
            $star.classList.add("-active");
        }
    })
}

function lastStar() {
    $stars.forEach(function ($star) {
        $star.classList.add("-active");
    })
}
