// const url = `https://api.kinopoisk.dev/v1.4/movie?page=1&limit=30&selectFields=id&selectFields=name&selectFields=description&selectFields=shortDescription&selectFields=year&selectFields=rating&selectFields=votes&selectFields=genres&selectFields=countries&selectFields=poster&selectFields=backdrop&selectFields=logo&selectFields=videos`;

// const headers = {
//   accept: "application/json",
//   "X-API-KEY": "C996Q6H-PNDMSE4-PC3GN51-9B0K1JE",
// };

// fetch(url, {
//   headers: headers,
// })
//   .then((res) => res.json())
//   .then((data) => localStorage.setItem("movies", JSON.stringify(data)));

export const data = localStorage.getItem("movies");
