
fetch('data/news.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('news-list');
    data.forEach(item => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <img src="images/news/${item.image}" alt="${item.title}" class="card-img"/>
        <h3>${item.title}</h3>
        <p>${item.desc}</p>
      `;
      container.appendChild(card);
    });
  });
