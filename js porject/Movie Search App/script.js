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
      `http://www.omdbapi.com/?t=${searchMovieInputValue}&apikey=fd443a49`,
    );

    const data = await response.json();

    if (data.Response === "True") {
      let movieTitle = data.Title;

      let movieYear = data.Year;

      let moviePoster = data.Poster;

      let movieRating = data.imdbRating;

      let moviePlot = data.Plot;

      let movieDirector = data.Director;

      let movieTitleHeading = document.createElement("h2");

      movieTitleHeading.textContent = movieTitle;

      let movieYearPara = document.createElement("p");

      movieYearPara.textContent = movieYear;

      let moviePosterImage = document.createElement("img");

      moviePosterImage.src = moviePoster;

      let movieRatingPara = document.createElement("p");

      movieRatingPara.textContent = `Rating : ${movieRating}`;

      let moviePlotPara = document.createElement("p");

      moviePlotPara.textContent = moviePlot;

      let movieDirectorHeading = document.createElement("h3");

      movieDirectorHeading.textContent = movieDirector;

      let mainMovieDiv = document.createElement("div");

      let movieInfoDiv = document.createElement("div");

      movieInfoDiv.appendChild(movieTitleHeading);

      movieInfoDiv.appendChild(movieYearPara);

      movieInfoDiv.appendChild(movieRatingPara);

      movieInfoDiv.appendChild(moviePlotPara);

      movieInfoDiv.appendChild(movieDirectorHeading);

      mainMovieDiv.appendChild(moviePosterImage);

      mainMovieDiv.appendChild(movieInfoDiv);

      displyMovieMainContainer.appendChild(mainMovieDiv);

      searchMovieInput.value = "";
    } else {
      let div = document.createElement("div");

      let p = document.createElement("p");

      p.textContent = "Movie not found / invalid movie name";

      div.appendChild(p);

      displyMovieMainContainer.appendChild(div);
    }
  }

  getMovie();
});
