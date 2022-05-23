const btn = document.getElementById("nav_toggle");
const links = document.querySelector(".nav_links");
const navbar = document.querySelector(".navs");
const scroll_link = document.querySelectorAll(".scroll_link");

// toggle links
btn.addEventListener("click", () => {
    links.classList.toggle("show_links");
});

// qustions

const showQ = document.getElementsByClassName("showQ");
const hideQ = document.getElementsByClassName("hideQ");
const answer = document.getElementsByClassName("answer");

showQ[0].addEventListener("click", () => {
    answer[0].classList.toggle("show");
    hideQ[0].classList.toggle("d-none");
    showQ[0].style.display = 'none';
});

hideQ[0].addEventListener("click", () => {
    answer[0].classList.toggle("show");
    hideQ[0].classList.toggle("d-none");
    showQ[0].style.display = 'inline';
});