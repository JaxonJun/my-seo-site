
fetch('data/games.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('game-list');
    data.forEach(item => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <img src="images/games/${item.image}" alt="${item.title}" class="card-img"/>
        <h3>${item.title}</h3>
        <p>${item.desc}</p>
      `;
      container.appendChild(card);
    });
  });
  
document.addEventListener("DOMContentLoaded", () => {
    const bar = document.querySelector('.recommended-bar');
    if (!bar) return;

    let scrollAmount = 0;
    const slideInterval = 30; // smaller = faster
    const scrollStep = 1;

    function autoScroll() {
        scrollAmount += scrollStep;
        if (scrollAmount >= bar.scrollWidth - bar.clientWidth) {
            scrollAmount = 0;
        }
        bar.scrollTo({
            left: scrollAmount,
            behavior: 'smooth'
        });
    }

    setInterval(autoScroll, slideInterval);
});
