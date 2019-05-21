const $search = document.querySelector("[type=search]");
const $searchIcon = document.querySelector(".searchIcon");
const $searchClose = document.querySelector(".searchClose");

$searchIcon.addEventListener("click", () => {
    $search.classList.toggle("-active");
    $searchIcon.classList.toggle("-inactive");
    setTimeout(() => $searchClose.classList.toggle("-active"), 300);
});

$searchClose.addEventListener("click", () => {
    $search.classList.toggle("-active");
    $searchIcon.classList.toggle("-inactive");
    $searchClose.classList.toggle("-active");
})
