const navToogle = document.querySelector(".toogle");
const navMenu = document.querySelector(".container__menu");

navToogle.addEventListener("click", () => {
    navMenu.classList.toggle("menu__visible");
});
