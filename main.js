import { data } from "./data";

function doesPosterExist(data) {
  const key = "poster";

  if (key in data) {
    return `
    <div class="card__poster">
      <img src=${data.poster.previewUrl} alt=${data.name}>
    </div>`;
  } else {
    return `
    <div class="card__poster">
      <div class="img-stub">
        <p>No image</p>
      </div>
    </div>`;
  }
}

function createMovieCard(movie) {
  const genres = [];
  const countries = [];

  movie.genres.forEach((genre) => {
    genres.push(Object.values(genre));
  });

  movie.countries.forEach((country) => {
    countries.push(Object.values(country));
  });

  return `<li class="movie__card card">
      ${doesPosterExist(movie)}

    <div class="card__description">
      <h3 class="name">${movie.name}</h3>

      <ul class="description__list">
        <li class="year">${movie.year}</li>
        <li class="genre">${genres.join(" ")}</li>
        <li class="country">${countries.join(" ")}</li>
      </ul>

      <p class="rating">Рейтинг IMDB ${movie.rating.imdb}</p>
  </li>`;
}

async function renderMoviesCards(moviesList) {
  const container = document.querySelector(".movies__cards");

  moviesList.forEach((movie) => {
    container.innerHTML += createMovieCard(movie);
  });

  container.innerHTML += cards;
}

const moviesList = JSON.parse(data).docs;

renderMoviesCards(moviesList);