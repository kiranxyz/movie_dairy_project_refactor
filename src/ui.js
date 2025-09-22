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
  return `<div class="flex bg-base-100 w-70 md:w-auto rounded-2xl shadow-sm pb-2">
            <figure class="px-3 pt-3">
              <img
              class="w-20 h-15 rounded-xl"
              src=${imageBaseUrl}${movie.poster_path}
              alt=${movie.title}
              class="rounded-xl"
              />
            </figure>
            <div class="felx flex-col justify-between">
              <h2 class="font-bold mt-1">${movie.title}</h2>
              <div class="">
                <button                
                class="border border-purple-200 px-2 rounded-lg text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 mt-3 removeMovie"
                data-movie-id='${movie.id}'
                >
                Remove from list
              </button>
            </div>
          </div>
        </div>`;
};

export { createFavCardHTML, createCardHTML };

// # Tasks for Harshi
//fix createFavCardHTML function to match design
//if possible, look overall website UI/UX and suggest improvements
