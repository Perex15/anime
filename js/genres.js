const genreCards = document.querySelectorAll(".genre-card");

genreCards.forEach(card => {
  card.addEventListener("mousemove", e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = ((x / rect.width) - 0.5) * 18;
    const rotateX = ((y / rect.height) - 0.5) * -18;

    card.style.transform = `
      rotateY(${rotateY}deg)
      rotateX(${rotateX}deg)
      translateZ(15px)
    `;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateY(0) rotateX(0)";
  });

  card.addEventListener("click", () => {
    const genre = card.dataset.genre;
    alert(`Load ${genre.toUpperCase()} anime list`);
  });
});
