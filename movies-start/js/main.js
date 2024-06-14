const options = document.querySelector(".options");
const Genresoption = document.querySelector(".Genresoptions");
const allmoviesListHTML = document.querySelector(".allmoviesListHTML")
const socialmediaHTML = document.querySelector(".socialmedia")
const movie = document.querySelector(".meta")
for(let i = 0; i <topNavigation.length; i++){
    options.innerHTML+=`<li><a href="#">${topNavigation[i]}</a></li>`
};

for(let i = 0; i<allMovies.length; i++){
    Genresoption.innerHTML+=`<li><a href="javascript:loadgenres(${i})">${allMovies[i].genres}</a></li>`
}

let loadgenres = function(g){
    let allMoviesHTML=" ";
    let movielist = allMovies[g].movies

    for(let i=0; i<allMovies[g].movies.length;i++){
        allMoviesHTML +=`<li><a href="#">${allMovies[g].movies[i].title} <strong>${allMovies[g].movies[i].length} mins</strong></a></li>`
    }

    allmoviesListHTML.innerHTML = allMoviesHTML;

let moviepage = function(g,m){
allMoviesHTML.innerHTML+=` <header>
                  <h2><a href="#"></a></h2>
                  <div class="cl">&nbsp;</div>
                </header>
                <div class="movie-trailer">
                  <iframe class="responsive-iframe" src="https://www.youtube.com/embed/TRFM7HQmkH0?si=5ypErhCZwGbm2re0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                </div> <p class="date">${allMovies[m].movies[g].date}</p>
                  <div class="right">
                    Authors: ${allMovies[m].movies[g].actors}
                  </div>
                  <div class="cl">&nbsp;</div>
                </div>
                <!-- end of meta -->
                <!-- post-cnt -->
                <div class="post-cnt">
                  <p>${allMovies[m].movies[g].desc} </p>
                </div>
                <!-- end of post-cnt -->
              </div>`
              };

              movie.innerHTML = allMoviesHTML;
};
     



for(let i = 0; i <socialMedia.length; i++){
    socialmediaHTML.innerHTML+=` <li><a href="#"> <${socialMedia[i].icon},${socialMedia[i].url}" alt=""> ${socialMedia[i].name}</a></li>`
}

