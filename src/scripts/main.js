import { data } from "./data";
import { doesPosterExist } from "./utils";

export const moviesList = JSON.parse(data).docs;

export function createMovieCard(movie) {
  const genres = [];
  const countries = [];

  movie.genres
    ? movie.genres.forEach((genre) => {
        genres.push(Object.values(genre));
      })
    : "";

  movie.countries
    ? movie.countries.forEach((country) => {
        countries.push(Object.values(country));
      })
    : "";

  return `<li class="movie__card card" data-id=${movie.id}>
      ${doesPosterExist(movie)}

    <div class="card__description">
      <h3 class="name">${movie.name}</h3>

      <ul class="description__list">
        <li class="year">${movie.year}</li>
        <li class="genre">${genres.join(" ")}</li>
        <li class="country">${countries.join(" ")}</li>
      </ul>

      <p class="rating">Рейтинг IMDB ${movie.rating.imdb}</p>
    </div>
  </li>`;
}

export async function renderMoviesCards(moviesList) {
  const container = document.querySelector(".movies__cards");
  container.innerHTML = "";

  moviesList.forEach((movie) => {
    container.innerHTML += createMovieCard(movie);
  });
}

renderMoviesCards(moviesList);
