const searchMovieInput = document.querySelector("#searchMovieInp");
const searchMovieBtn = document.querySelector("#searchMovieBtn");
const displyMovieMainContainer = document.querySelector(
  "#displyMovieMainContainer",
);

searchMovieBtn.addEventListener("click", function () {
  let searchMovieInputValue = searchMovieInput.value;

  if (searchMovieInputValue.trim() === "") return;

  async function getMovie() {
    const response = await fetch(
      "http://www.omdbapi.com/?i=tt3896198&apikey=fd443a49",
    );

    const data = await response.json();

    console.log(data);

    if (data.Response === "True") {
      console.log("true comes");
      console.log(data.Title);
    } else {
    }
  }

  getMovie();
});
