const section = document.querySelectorAll("section");
const navLi = document.getElementById("home estudos experiencia sobre");
console.log(navLi);

window.addEventListener("scroll", () => {
  let current = "";

  section.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sctionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });
  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
});
