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
    console.log("localStorage has favMovies key found");

    // # get existing movies from localStorage
    const existingMovies = JSON.parse(localStorage.getItem("favMovies"));

    // # check if the movie already exists in the storage
    const movieExists = existingMovies.find((m) => m.id === movie.id);
    favMovieArray = [...existingMovies];
  }
  favMovieArray.push(movie);
  localStorage.setItem("favMovies", JSON.stringify(favMovieArray));
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
  if (!localStorage.getItem("favMovies")) return [];

  // # get existing favMovies from localStorage
  const existingfavMovies = localStorage.getItem("favMovies");

  // # return existing favMovies as an array
  return JSON.parse(existingfavMovies);
}

function removeFromStorage(item) {}
function clearStorage() {
  localStorage.clear();
}
export { addToStorage, getStorage, removeFromStorage, clearStorage };

// # Tasks for Anila

//fix addtoStorage function to avoid duplicates
//fix getStorage function to return empty array if no movies found
//add removeFromStorage function to remove a movie from localStorage
//add clearStorage function to clear all movies from localStorage
//GitHub repo and Parcel setup
