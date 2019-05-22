const $inputSearch = document.querySelector(".input-search");
const $icon = $inputSearch.querySelector(".-search");
const $close = $inputSearch.querySelector(".-close");


$icon.addEventListener("click", (event) => {
    event.preventDefault();
    $inputSearch.classList.toggle("-active");
    $icon.classList.remove("-active");
    $close.classList.add("-active");
})

$close.addEventListener("click", (event) => {
    event.preventDefault();
    $inputSearch.classList.toggle("-active");
    $close.classList.remove("-active");
    $icon.classList.add("-active");
})