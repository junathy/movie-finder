const apiKey = '617f4607';


async function searchMovie(title) {
    const response = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&t=${encodeURIComponent(title)}`);
    const data = await response.json();

    if (data.Response === "True") {
        console.log(data);
    } else {
        console.error('Movie not found');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('search-btn');
    
    searchButton.addEventListener('click', () => {
        const title = document.getElementById('movie-input').value.trim();
        if (title) {
            searchMovie(title);
        }
    });
});