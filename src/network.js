const baseUrl = "https://api.themoviedb.org/3";
const imageBaseUrl = "https://image.tmdb.org/t/p/w200";
const API_URL =
  "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YzJmMzE3Y2MxMDQ5N2Q4YjI2MTI2M2Q2NTMyY2I1ZiIsIm5iZiI6MTc1NzQ4OTUwMi4yNzIsInN1YiI6IjY4YzEyOTVlMDI1MWZlZmZjZTk0ODUyOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3DhZTY3n01UvQG1NdkKHogte9L6y6M8swTNVz8BM-xM",
  },
};

const getMovies = async () => {
  try {
    const res = await fetch(API_URL, options);
    const data = await res.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching popular movies:", error);
  }
};

const searchMovie = async (url) => {
  const form = document.querySelector("form");
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const searchText = event.target.search.value;
    try {
      const results = await search(searchText);
      let cardHtml = "";

      if (results && results.forEach) {
        cardsContainer.innerHTML = "";
        results.forEach((movie) => {
          cardHtml = createCardHTML(movie);
          createCard(cardHtml, true);
        });
      } else {
        console.log("No results");
      }
    } catch (error) {
      console.log(error);
    }
  });
};

// # Search movie by any string
const search = async (searchText) => {
  if (!searchText) return alert("Please enter a search term");

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
        searchText
      )}&include_adult=false&language=en-US&page=1`,
      options
    );

    if (!response.ok) {
      console.log("soemthing went wrong while fetching api");
    }

    const data = await response.json();
    // console.log(data);
    return data.results;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export { getMovies, searchMovie };
