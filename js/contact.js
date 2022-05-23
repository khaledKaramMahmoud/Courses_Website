const btn = document.getElementById("nav_toggle");
const links = document.querySelector(".nav_links");

// toggle links
btn.addEventListener("click", () => {
    links.classList.toggle("show_links");
});