const apiKey = 'YOUR_API_KEY'; // Replace with your TMDb API key

document.getElementById('searchButton').addEventListener('click', searchMovies);

async function searchMovies() {
    const query = document.getElementById('searchInput').value;
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        displayMovies(data.results);
    } catch (error) {
        console.error('Error fetching movie data:', error);
    }
}

function displayMovies(movies) {
    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = '';

    movies.forEach(movie => {
        const movieDiv = document.createElement('div');
        movieDiv.classList.add('movie');

        const title = document.createElement('h2');
        title.textContent = movie.title;

        const overview = document.createElement('p');
        overview.textContent = movie.overview;

        movieDiv.appendChild(title);
        movieDiv.appendChild(overview);
        mainContent.appendChild(movieDiv);
    });
}
