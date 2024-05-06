const movieGernes = document.querySelector(".movieGernes");
const movielist = document.querySelector(".movielist");
const selected_movie = document.querySelector(".selected-movie")

for (let i = 0; i < allMovies.length; i++) {
  movieGernes.innerHTML += `<option value="${i}">${allMovies[i].gerne}</option>`;
}

selected_movie.addEventListener("click", function () {
selected-movie.classlist.add("selected-movie")
});

let loadMovieList = function (g) {
  let allMoviesHTML = "";
  let movielistGerne = allMovies[g].movies;

  for (let i = 0; i < movielistGerne.length; i++) {
    allMoviesHTML += ` <li>
                <h4>${movielistGerne[i].title}</h4>
                <img src="assets/img/${movielistGerne[i].thumb}" alt="Kill Boksoon"/>
                <p class="description">
                  ${movielistGerne[i].desc}
                </p>
                <div class="row movie-stats m0 p0">
                  <div class="col m0 p0">Date: <span>${movielistGerne[i].date}</span></div>
                  <div class="col m0 p0">Length: <span>${movielistGerne[i].length}</span></div>
                </div>
              </li>`;
  }
  movielist.innerHTML = allMoviesHTML;
};

loadMovieList(0);
