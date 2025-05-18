const apiKey = '617f4607';

document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('search-btn');

    searchButton.addEventListener('click', async () => {
        const title = document.getElementById('movie-input').value.trim();
        if (title) {
            searchMovie(title);
        } else {
            alert("Please enter a movie title.");
        }
    });
});

async function searchMovie(title) {
    try {
        const url = `https://www.omdbapi.com/?apikey=${apiKey}&t=${encodeURIComponent(title)}`
        const response = await fetch(url);
        const data = await response.json();

        if (data.Response === "True") {
            console.log(data);
        } else {
            console.error('Movie not found');
            alert('Movie not found.');
        }
    } catch (error) {
        console.error('Error fetching movie data:', error);
        alert('Failed to fetch movie data.')
    }
}

