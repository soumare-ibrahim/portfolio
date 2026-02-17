// rss.js
document.addEventListener('DOMContentLoaded', () => {
  const rssContainer = document.getElementById('rss-feed');
  rssContainer.setAttribute('aria-busy', 'true');
  
  const rssUrl = 'https://www.objetconnecte.com/feed/';
  const proxyUrl = 'https://api.rss2json.com/v1/api.json?rss_url=' + encodeURIComponent(rssUrl);
  
  fetch(proxyUrl)
    .then(res => res.json())
    .then(data => {
      rssContainer.innerHTML = '';
      data.items.slice(0, 6).forEach(item => {
        let imageUrl = 'img/default-cyber.jpg';
        
        if (item.enclosure && item.enclosure.link) {
          imageUrl = item.enclosure.link;
        } else {
          const imgMatch = item.description.match(/<img[^>]+src="([^">]+)"/i);
          if (imgMatch) imageUrl = imgMatch[1];
        }
        
        const article = document.createElement('article');
        article.className = 'rss-article';
        article.innerHTML = `
          <a href="${item.link}" target="_blank" rel="noopener noreferrer" class="rss-link">
            <img src="${imageUrl}" alt="${item.title}" class="rss-image" loading="lazy" 
                 onerror="this.src='img/default-cyber.jpg';" />
            <div class="rss-content">
              <h3>${item.title}</h3>
              <p>${item.description.replace(/<[^>]*>?/gm, '').slice(0, 150)}...</p>
              <span class="read-more">Read more</span>
            </div>
          </a>
        `;
        rssContainer.appendChild(article);
      });
    })
    .catch(err => {
      rssContainer.innerHTML = `<p>Erreur lors du chargement des flux RSS. Essayez de recharger la page.</p>`;
      console.error(err);
    })
    .finally(() => {
      rssContainer.setAttribute('aria-busy', 'false');
    });
});