import { doesPosterExist } from "./utils";
import { moviesList } from "./main";

window.addEventListener("DOMContentLoaded", openMovieModal);

function showMovieInfo(movieId) {
  const movie = moviesList.filter((item) => item.id == movieId)[0];

  return `
  <div id="closeBtn">
    <div class="closeBtnIn">
        <div class="closeBtnText">Закрыть</div>
    </div>
  </div>

  <h3 class="film-info__name">${movie.name}</h3>

  ${doesPosterExist(movie, true)} `;
}

export function openMovieModal() {
  const moviesCards = document.querySelector(".movies__cards");
  const filmPopup = document.querySelector("#filmPopup");

  moviesCards.addEventListener("click", (ev) => {
    ev.preventDefault();

    const elem = ev.target.closest(".card");
    filmPopup.innerHTML = "";

    const movieId = elem.dataset.id;
    filmPopup.innerHTML += showMovieInfo(movieId);
    filmPopup.showModal();
    document.body.style.overflow = "hidden";

    const closeBtn = document.querySelector("#closeBtn");
    closeBtn.addEventListener("click", () => {
      filmPopup.close();
      filmPopup.innerHTML = "";
      document.body.style.overflow = "";
    });
  });
}
