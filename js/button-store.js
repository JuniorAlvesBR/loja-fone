const $second = window.document.querySelector(".-second");
const $action = window.document.querySelector(".action.-last")


$second.addEventListener("click", handleclick);

function handleclick() {
    $action.innerHTML = "Teste-ha";
}
