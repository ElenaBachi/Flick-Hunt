export function doesPosterExist(movie, isModal = false) {
  let key;

  if (isModal) {
    key = "backdrop";

    if (key in movie) {
      return `
      <img class="film-info__img" src=${movie.backdrop.url} alt=${movie.name}>`;
    } else {
      return `
      <img class="film-info__img" src="./src/images/giphy.gif" alt="Нет фото" width="600">`;
    }
  } else {
    key = "poster";

    if (key in movie) {
      return `
      <div class="card__poster">
        <img src=${movie.poster.previewUrl} alt=${movie.name}>
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
}
