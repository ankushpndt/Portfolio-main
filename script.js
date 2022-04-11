const hamburgerBtn = document.getElementById("hamburger");
const navUL = document.getElementById("nav-ul");
hamburgerBtn.addEventListener("click", () => {
	navUL.classList.toggle("show");
});
