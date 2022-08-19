window.addEventListener("scroll", function(){
    var navBar = document.querySelector(".navbar");
    navBar.classList.toggle("sticky", window.scrollY > 0);
})

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".link-list");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("hamburger_active");
    navMenu.classList.toggle("link-list_active");
});

document.querySelectorAll(".nav-item").forEach(n => n.addEventListener("click",() => {
    hamburger.classList.remove("hamburger_active");
    navMenu.classList.remove("link-list_active");
}))