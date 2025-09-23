const imageBaseUrl = "https://image.tmdb.org/t/p/w200";

// # creat card html with movie info
const createCardHTML = (movie) => {
  return `<div class="card bg-base-100 w-60 shadow-sm">
    <figure class="px-3 pt-3">
    <img
    src=${imageBaseUrl}${movie.poster_path}
    alt=${movie.title}
    class="rounded-xl"
    />
    </figure>
    <div class="card-body items-center text-center">
    <h2 class="card-title">${movie.title}</h2>
    <p>
    ${movie.overview}
    </p>
    <div class="card-actions">
    <button class="btn btn-primary addToFavourite" data-movie-id="${movie.id}">
    Add to favourite
    </button>
    </div>
    </div>
    `;
};

// # create html for favourite movies
const createFavCardHTML = (movie) => {
  return `
    <div class="flex items-center bg-base-100 rounded-2xl shadow-md p-3 gap-4" data-movie-id="${movie.id}">
      <figure>
        <img
          class="w-16 h-24 object-cover rounded-lg"
          src="${imageBaseUrl}${movie.poster_path}"
          alt="${movie.title}"
        />
      </figure>
      <div class="flex flex-col flex-1 justify-between">
        <h2 class="font-semibold text-lg mb-2">${movie.title}</h2>
        <button                
          class="btn btn-outline btn-sm text-purple-600 hover:bg-purple-600 hover:text-white removeMovie"
          data-movie-id="${movie.id}">
          Remove
        </button>
      </div>
    </div>
  `;
};

export { createFavCardHTML, createCardHTML };

// # Tasks for Harshi
//fix createFavCardHTML function to match design
//if possible, look overall website UI/UX and suggest improvements
