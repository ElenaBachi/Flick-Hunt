import { data } from "./data";
import { doesPosterExist } from "./utils";

window.addEventListener("DOMContentLoaded", function () {
  const moviesCards = document.querySelectorAll(".card");
  const filmPopup = document.querySelector("#filmPopup");

  moviesCards.forEach((card) => {
    card.addEventListener("click", (ev) => {
      ev.preventDefault();

      const movieId = card.dataset.id;
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
  });
});

function showMovieInfo(movieId) {
  const movies = JSON.parse(data).docs;
  const movie = movies.filter((item) => item.id == movieId)[0];

  return `
  <div id="closeBtn">
    <div class="closeBtnIn">
        <div class="closeBtnText">Закрыть</div>
    </div>
  </div>

  <h3 class="film-info__name">${movie.name}</h3>

  ${doesPosterExist(movie, true)} `;
}
