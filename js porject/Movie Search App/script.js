const searchMovieInput = document.querySelector("#searchMovieInp");

const searchMovieBtn = document.querySelector("#searchMovieBtn");

const displyMovieMainContainer = document.querySelector(
  "#displyMovieMainContainer",
);

searchMovieBtn.addEventListener("click", function () {
  displyMovieMainContainer.innerHTML = "";

  let searchMovieInputValue = searchMovieInput.value;

  if (searchMovieInputValue.trim() === "") return;

  async function getMovie() {
    const response = await fetch(
      `http://www.omdbapi.com/?s=${searchMovieInputValue}&apikey=fd443a49`,
    );

    const data = await response.json();

  

    if (data.Response === "True") {
      data.Search.forEach((movie) => {
        let movieTitle = movie.Title;
        let movieYear = movie.Year;
        let moviePoster = movie.Poster;
        let movieType = movie.Type;

        let subDiv = document.createElement("div");

        let h1ForMovieTitle = document.createElement("h1");
        h1ForMovieTitle.textContent = movieTitle;

        let pForMovieYear = document.createElement("p");
        pForMovieYear.textContent = movieYear;

        let imgForMoviePoster = document.createElement("img");
        imgForMoviePoster.src = moviePoster;

        let h3ForMovieType = document.createElement("h3");
        h3ForMovieType.textContent = movieType;

        subDiv.appendChild(imgForMoviePoster);
        subDiv.appendChild(h1ForMovieTitle);
        subDiv.appendChild(pForMovieYear);
        subDiv.appendChild(h3ForMovieType);

        displyMovieMainContainer.appendChild(subDiv);
      });
    } else {
      let subDiv = document.createElement("div");

      let p = document.createElement("p");
      p.textContent = "Movie not Available";

      subDiv.appendChild(p);
      displyMovieMainContainer.appendChild(subDiv);
    }
  }

  getMovie();
});
