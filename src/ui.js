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
    <div class="card bg-base-100 w-60 shadow-sm hover:shadow-lg hover:scale-105 transition">
      <figure class="px-3 pt-3">
        <img
          src="${imageBaseUrl}${movie.poster_path}"
          alt="${movie.title}"
          class="rounded-xl object-cover h-80 w-full"
        />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title line-clamp-1">${movie.title}</h2>
        <p class="text-sm text-gray-600 line-clamp-3">${movie.overview}</p>
        <div class="card-actions">
          <button class="btn btn-primary removeMovie" data-movie-id='${movie.id}'>
            Remove
          </button>
        </div>
      </div>
    </div>
  `;
};




export { createFavCardHTML, createCardHTML };
