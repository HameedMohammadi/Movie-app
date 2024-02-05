const apiKey = '19d1f5022e40544c6415eac1cec644ee';

async function searchMovies() {
    const searchInput = document.getElementById('searchInput').value.trim();

    // Check if search input is empty
    if (searchInput === '') {
        alert('Please enter a movie title to search.');
        return;
    }

    const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(searchInput)}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        displayMovies(data.results);
    } catch (error) {
        console.log('Error fetching movie data:', error);
    }
}

function displayMovies(movies) {
    const movieList = document.getElementById('movie-list');
    movieList.innerHTML = '';

    movies.forEach((movie) => {
        const movieItem = document.createElement('div');
        movieItem.classList.add('movie-item');
        const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`; // Construct poster URL
        movieItem.innerHTML = `
            <h2>${movie.title}</h2>
            <img src="${posterUrl}" alt="${movie.title} Poster"> <!-- Add image tag for poster -->
            <p>${movie.overview}</p>
        `;
        movieList.appendChild(movieItem);
    });
}

document.getElementById('search-button').addEventListener('click', searchMovies);
