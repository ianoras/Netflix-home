
function populateMovie(rowId, start, end) {
    const row = document.getElementById(rowId);
    for (let i = start; i <= end; i++) {
        const imagePath = `assets/imgs/movies/${i}.png`; 
        const card = createMovieCard(imagePath);
        row.appendChild(card);
    }
}


function createMovieCard(imagePath) {
    const card = document.createElement('div');
    card.className = 'movie-card';
    card.innerHTML = `
        <img src="${imagePath}" class="img-fluid rounded" alt="Movie Thumbnail">
    `;
    return card;
}



// SLIDER

function StartSlider(rowId) {
    const slider = document.getElementById(rowId);
    const row = slider.closest('.movie-row');
    const prevButton = row.querySelector('.prev-button');
    const nextButton = row.querySelector('.next-button');
    currentTranslate=0;

    //next button
    nextButton.addEventListener('click', () => {
        currentTranslate -= 1000
        currentTranslate = Math.max(currentTranslate, -slider.scrollWidth + row.offsetWidth);
        slider.style.transform = `translateX(${currentTranslate}px)`;
    });

    prevButton.addEventListener('click', () => {
        currentTranslate += 1000
        currentTranslate = Math.min(currentTranslate, 0);
        slider.style.transform = `translateX(${currentTranslate}px)`;
    });

}

// Popolamento delle righe
document.addEventListener('DOMContentLoaded', () => {
    populateMovie('treandingNow', 1, 6);
    populateMovie('watchItAgain', 7, 12);
    populateMovie('newRelases', 13, 18);

    StartSlider('treandingNow');
    StartSlider('watchItAgain');
    StartSlider('newRelases');
});

