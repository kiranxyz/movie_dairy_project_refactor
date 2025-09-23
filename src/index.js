import { addToStorage } from "./storage.js";
import { getMovies, searchMovie } from "./network.js";
import { createFavCardHTML, createCardHTML } from "./ui.js";
import { movieStore } from "./movieStore.js";

const cardsContainer = document.querySelector("#cards-container");
let movies = [];

// # Load movie list on window load event
window.addEventListener("load", async () => {
  console.log("Page has been loaded");
  let cardHtml = "";

  // # calling default Api to load movies
  movies = await getMovies();
  movies.forEach((movie) => {
    cardHtml = createCardHTML(movie);
    createCard(cardHtml, false);
    movieStore.push(movie);
  });
});

// # Add default or searched movie card to the interface
const createCard = (cards) => (cardsContainer.innerHTML += cards);

document.addEventListener("click", async (e) => {
  if (e.target && e.target.classList.contains("addToFavourite")) {
    console.log(movieStore);
    // Find the movie object from your movie list (assuming you have it in `movies`)
    const movieId = e.target.dataset.movieId.trim();
    const movie = movieStore.find((m) => m.id === Number(movieId)); // Get full movie object
    if (!movie) return;
    //console.log("Adding to favourites:", movie);

    // # Add movie to local storage
    addToStorage(movie);
  }
});

// # set footer with current year
document.querySelector(
  "#copyright"
).textContent = `Copyright © ${new Date().getFullYear()} - All right reserved`;
