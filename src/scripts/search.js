import { moviesList, renderMoviesCards } from "./main";
import { openMovieModal } from "./modal";

const searchInput = document.querySelector("#search");

searchInput.addEventListener("input", () => {
  const inputText = searchInput.value.trim().toLowerCase();

  renderMoviesCards(createFilteredList(inputText, moviesList));
  openMovieModal();
});

function createFilteredList(text, list) {
  let movies = [];

  list.forEach((item) => {
    const name = item.name ? item.name.toLowerCase() : "";

    name.includes(text) ? movies.push(item) : "";
  });

  return movies;
}

// document.addEventListener("change", () => {
//   const movies = document
//     .querySelector(".movies__cards")
//     .querySelectorAll(".card");
//   const warning = document.querySelector(".warning");

//   if (movies.length === 0) warning.classList.remove("hidden");
//   if (movies.length > 0) warning.classList.add("hidden");
// });
