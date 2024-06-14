const title = document.querySelector('#hahah')
const heroimage = document.querySelector('#heroimage')


let loadPage = function(season){
  if(season == 'spring'){
    title.innerHTML=`<h1 class="text-center" id="hahah">Welcome to ${season}</h1>`
    heroimage.src=`assets/images/spring.png`
  }

  if(season == 'summer'){
    title.innerHTML=`<h1 class="text-center" id="hahah">Welcome to ${season}</h1>`
    heroimage.src=`assets/images/summer.png`
  }


  if(season == 'fall'){
        title.innerHTML=`<h1 class="text-center" id="hahah">Welcome to ${season}</h1>`
         heroimage.src=`assets/images/fall.png`
  }

  if(season == 'winter'){
        title.innerHTML=`<h1 class="text-center" id="hahah">Welcome to ${season}</h1>`
        heroimage.src=`assets/images/winter.png`

  }
  
if(season == 'allSeasons'){
  title.innerHTML=`<h1 class="text-center" id="hahah">Welcome to All Seasons</h1>`
  heroimage.src+=`assets/images/spring.png`
  heroimage.src+=`assets/images/summer.png`
  heroimage.src+=`assets/images/fall.png`
  heroimage.src+=`assets/images/winter.png`
}


}