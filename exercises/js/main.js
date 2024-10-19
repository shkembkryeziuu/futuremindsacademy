const movieTypes = document.querySelector(".movieTypes");
const movieFilms = document.querySelector(".movieFilms");
const displayMovies = document.querySelector(".displayMovies");
const typesOffMovies = document.querySelector(".typesOffMovies");
const sociallMedia = document.querySelector(".socialsMedia");

for (let i = 0; i < topNavigation.length; i++) {
  typesOffMovies.innerHTML += `<li><a href="#">${topNavigation[i]}</a></li>`;
};


for (let i = 0; i < allMovies.length; i++) {
  movieTypes.innerHTML += `<li><a href="javascript: loadGernes(${i})">${allMovies[i].genres}</a></li>`;
};



let loadGernes = function (g) {
  let allMoviesHTML = '';
  let movieListGerne = allMovies[g].movies;

  for (let i = 0; i < movieListGerne.length; i++) {
    allMoviesHTML += ` <li onclick="movieDetailPage(${g}, ${i})"><a href="#">${movieListGerne[i].title}  <strong>${movieListGerne[i].length} mins</strong></a></li>`;
  };

  movieFilms.innerHTML = allMoviesHTML;
}



let movieDetailPage = function (g, m) {
  let movieListGerne = allMovies[g].movies;

  displayMovies.innerHTML = `<header>
        <h2><a href="#">${movieListGerne[m].title}</a></h2>
        <div class="cl">&nbsp;</div>
      </header>
      <div class="movie-trailer">
      ${movieListGerne[m].trailer}

      </div>

      <!-- meta -->
      <div class="meta">
        <p class="date">Date: ${movieListGerne[m].date}</p>
        <div class="right">
          Authors: ${movieListGerne[m].actors}
        </div>
        <div class="cl">&nbsp;</div>
      </div>
      <!-- end of meta -->
      <!-- post-cnt -->
      <div class="post-cnt">
        <p>${movieListGerne[m].desc} </p>
      </div>
      <!-- end of post-cnt -->
    </div>
    <!-- post-inner -->
  </div>
  <!-- end of`
};




loadGernes(0);
movieDetailPage(0, 0);