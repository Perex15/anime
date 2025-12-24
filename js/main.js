const cards = document.querySelectorAll(".anime-card");

cards.forEach(card => {
  card.addEventListener("mousemove", e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = ((x / rect.width) - 0.5) * 25;
    const rotateX = ((y / rect.height) - 0.5) * -25;

    card.style.transform = `
      rotateY(${rotateY}deg)
      rotateX(${rotateX}deg)
      scale(1.06)
    `;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateY(0deg) rotateX(0deg) scale(1)";
  });
});

/* HAMBURGER MENU */
const hamMenu = document.querySelector(".ham-menu");
const topMenu = document.querySelector(".top-menu");
const menuLinks = document.querySelectorAll(".menu-link");

/* Page transition overlay */
const transition = document.createElement("div");
transition.classList.add("page-transition");
document.body.appendChild(transition);

/* Toggle menu */
function toggleMenu() {
  hamMenu.classList.toggle("active");
  topMenu.classList.toggle("active");
  document.body.classList.toggle("menu-open");
}

hamMenu.addEventListener("click", toggleMenu);

/* Auto-close on link click + page transition */
menuLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = link.getAttribute("href");

    transition.classList.add("active");
    toggleMenu();

    setTimeout(() => {
      window.location.href = target;
    }, 400);
  });
});

/* ESC key support */
document.addEventListener("keydown", e => {
  if (e.key === "Escape" && topMenu.classList.contains("active")) {
    toggleMenu();
  }
});



