const ghibli = document.querySelectorAll(".ghibli-item");

ghibli.forEach((item) => {
  item.addEventListener("click", () => {
    removeActiveClasses();
    item.classList.add("active");
  });
});

function removeActiveClasses() {
  ghibli.forEach((item) => {
    item.classList.remove("active");
  });
}
