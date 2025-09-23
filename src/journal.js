import { getStorage, removeFromStorage } from "./storage.js";
import { createFavCardHTML } from "./ui.js";

const favMovieContainer = document.querySelector("#fav-movie-container");

// # Load movie list on window load event
window.addEventListener("load", () => {
  console.log("Favourite movie Page has been loaded");
  let cardHtml = "";

  // # calling default Api to load movies
  const faVMovies = getStorage();
  faVMovies.forEach((movie) => {
    //console.log(movie);
    cardHtml = createFavCardHTML(movie);
    createCard(cardHtml, false);
    //createFavCardHTML(cardHtml, false);
  });
});

// # Add default or searched movie card to the interface
const createCard = (cards) => (favMovieContainer.innerHTML += cards);

document.addEventListener("click", async (e) => {
  if (e.target && e.target.classList.contains("removeMovie")) {
    console.log("Add to favourite button clicked");
    const movieId = e.target.getAttribute("data-movie-id");
    console.log("Movie ID:", movieId);
  }
});
