const movieGernes = document.querySelector(".movieGernes");
const movielist = document.querySelector(".movielist");
const detailPage = document.querySelector(".movie-details-page")
let activeMovie = 0;

for (let i = 0; i < allMovies.length; i++) {
  movieGernes.innerHTML += `<option value="${i}">${allMovies[i].gerne}</option>`;
}




let loadMovieList = function (g) {
  let allMoviesHTML = " ";
  let movielistGerne = allMovies[g].movies;

  for (let i = 0; i < movielistGerne.length; i++) {
    allMoviesHTML += ` <li onclick="movieDetailPage(${g},${i}, this)">
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

  movieDetailPage(0 ,0 , movielist.firstChild)
};

let movieDetailPage = function(g, m, n){


let movielistGerne = allMovies[g].movies;

      let movieDetailHTML =`<h1>${movielistGerne[m].title}</h1>
                <h4>Date: 02-24-2023 |${movielistGerne[m].date}  | Lengh: ${movielistGerne[m].length} min </h4>
                <div class="container">
                 ${movielistGerne[m].trailer}
                </div>

                <h4>${movielistGerne[m].actors}</h4>
                <p>
                  ${movielistGerne[m].desc}</p>`

                  detailPage.innerHTML = movieDetailHTML;

                  movielist.childNodes[activeMovie].classList.remove('selected-movie');

                  activeMovie = m;
                  n.classList.add('selected-movie');
}


loadMovieList(0);

