/**
 * This function adds a movie to localStorage
 * it first checks if there are existing movies in the storage
 * if there are existing movies, it checks if the movie to be added already exists
 * if it does not exist, it adds the movie to the existing array and saves it back to localStorage
 * if there are no existing movies, it creates a new array with the movie and saves it to localStorage
 * @param {movie} movie
 */
function addToStorage(movie) {
  let favMovieArray = [];

  if (localStorage.getItem("favMovies")) {
    // get existing movies from localStorage
    favMovieArray = JSON.parse(localStorage.getItem("favMovies"));
  }
  // check if the movie already exists

  // check if a movie with the same id already exists
  const movieExists = favMovieArray.some((m) => m.id === movie.id);

  if (!movieExists) {
    favMovieArray.push(movie);
    localStorage.setItem("favMovies", JSON.stringify(favMovieArray));
    console.log(`${movie.title} added to favorites`);
  } else {
    console.log(`${movie.title} is already in favorites`);
  }
}

/**
 * this function gets movies from localStorage
 * if there are no movies, it returns an empty array
 * if there are movies, it returns them as an array
 * @returns {Array} array of movies from localStorage
 */

// # get movies from localStorage
function getStorage() {
  // # check if there is any existing favMovies in localStorage
  try {
    const storedMovies = localStorage.getItem("favMovies");
    if (!storedMovies) return []; // no key found → return empty array

    const parsedMovies = JSON.parse(storedMovies);
    return Array.isArray(parsedMovies) ? parsedMovies : []; // safety check
  } catch (error) {
    console.error("Error reading favMovies from localStorage:", error);
    return []; // fallback → empty array
  }
}

function removeFromStorage(movieId) {
  let favMovieArray = JSON.parse(localStorage.getItem("favMovies")) || [];
  favMovieArray = favMovieArray.filter((m) => m.id !== movieId);
  localStorage.setItem("favMovies", JSON.stringify(favMovieArray));
  localStorage.removeItem(movieId);
  console.log(`Movie with id ${movieId} removed from favorites`);
}
function clearStorage() {
  localStorage.clear();
}
export { addToStorage, getStorage, removeFromStorage, clearStorage };
