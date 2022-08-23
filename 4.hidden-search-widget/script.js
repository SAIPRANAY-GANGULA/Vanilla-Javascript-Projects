const search = document.querySelector(".search");
const search_icon = document.querySelector(".btn");
const input = document.querySelector(".input");

search_icon.addEventListener("click", () => {
  search.classList.toggle("active");
  input.focus();
});
