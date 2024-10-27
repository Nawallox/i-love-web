function toggleArticles() {
    const hiddenArticles = document.querySelectorAll('#dagboek article.hidden');
    const seeMoreButton = document.querySelector('.see-more');
    
    hiddenArticles.forEach(article => {
        article.classList.toggle('hidden');
    });
    
    if (seeMoreButton.innerText === 'Meer Artikelen') {
        seeMoreButton.innerText = 'Minder Artikelen';
    } else {
        seeMoreButton.innerText = 'Meer Artikelen';
     }
    }
