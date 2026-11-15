
const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

const sections = document.querySelectorAll("body > section");
const footer = document.querySelector("footer");

function showSection(id) {
  sections.forEach(function (section) {
    const isHomeHero =
      id === "home" && section.classList.contains("hero");

    section.style.display =
      section.id === id || isHomeHero ? "block" : "none";
  });

  if (footer) {
    footer.style.display = "block";
  }
}

showSection("home");

if (menuBtn && navbar) {
  menuBtn.addEventListener("click", function () {
    navbar.classList.toggle("active");
  });
}

document.querySelectorAll("#navbar a").forEach(function (link) {
  link.addEventListener("click", function (event) {
    const target = link.getAttribute("href");

    document.querySelectorAll("#navbar a").forEach(function (item) {
      item.classList.remove("active-link");
    });

    link.classList.add("active-link");

    if (target.startsWith("#")) {
      event.preventDefault();
      showSection(target.substring(1));

      if (navbar) {
        navbar.classList.remove("active");
      }

      window.scrollTo(0, 0);
    }
  });
});