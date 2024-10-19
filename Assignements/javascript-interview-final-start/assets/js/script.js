const gerne = document.querySelector('#gerne')
const movielist = document.querySelector('#movieThumb')
for(let i =0; i<allMovies.length;i++){
    gerne.innerHTML+=`  <option value="${i}" >${allMovies[i].gerne}</option>`
};
loadMovies(0);
function loadMovies(g){

    for(let i = 0; i<movies.length; i++){
          moviesHTML+=`  <li>
                        <h4>${h}/h4>
                        <img src="assets/img/${movies[i].thumb}" alt="" class="img-xl">
                        <p>${movies[i].desc}</p>
                        p>${movies[i].actors}</p>
                        <p>Lengh: ${movies[i].length}</p>
                        <p>Date: ${movies[i].date}</p>
                    </li>`
    }
    movielist.innerHTML =moviesHTML
};

