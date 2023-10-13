const h1 = document.querySelector("h1");
const ul = document.querySelector("ul");



h1.addEventListener("click", () => {
    ul.classList.toggle("show");
});