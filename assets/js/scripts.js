const featuredGames = [
  {
    title: "From Nothing",
    image: "assets/images/From-Nothing.png",
    link: "pages/games/game1.html",
    description: "Climb the Ladder. Rule the Streets. Build Your Empire.",
  },
  {
    title: "Conviction",
    image: "assets/images/conviction.png",
    link: "pages/games/game2.html",
    description: "Uncover the truth in a dystopian city.",
  },
];

const featuredGamesContainer = document.querySelector(".featured-games");

featuredGames.forEach((game) => {
  const gameItem = document.createElement("li");
  gameItem.innerHTML = `
      <a href="${game.link}">
        <img src="${game.image}" alt="${game.title} Game Cover" />
        <p>${game.title}</p>
      </a>
    `;
  featuredGamesContainer.appendChild(gameItem);
});

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.1 }
);

sections.forEach((section) => {
  section.classList.add("hidden");
  observer.observe(section);
});
