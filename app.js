const movieContainer = document.querySelector(".movie-info");
const moviePoster = document.querySelector(".movie-poster");
const movieTitle = document.querySelector(".movie-title");
const movieDescription = document.querySelector(".movie-description");
const getRandomMovieButton = document.querySelector(".find-movie");

const API_KEY = "4c6507f6f26512403717551720b563bb"

getRandomMovieButton.addEventListener("click", async () => {
    const randomId = Math.floor(Math.random() * 500) 
    let movie = await getMovie(randomId)

    while (movie.success != undefined) {
        movie = await getMovie(Math.floor(Math.random() * 500))
    }

    renderMovie(movie)
})

async function getMovie(randomId) {
    const movie = await fetch(`https://api.themoviedb.org/3/movie/${randomId}?api_key=${API_KEY}`)
    const movieData = await movie.json()

    return movieData
}

function renderMovie(movieData) {
    movieContainer.style.display = "flex"
    moviePoster.src = `https://image.tmdb.org/t/p/w500/${movieData.poster_path}`
    movieTitle.textContent = movieData.title
    movieDescription.textContent = movieData.overview
}