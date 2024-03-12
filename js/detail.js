import animes from './anime.js';

const mainApp = document.querySelector('#navbar');

fetch('template.html')
  .then(response => response.text())
  .then(html => {
    mainApp.innerHTML = html;
  })

const initApp = () => {
  let animeID = new URLSearchParams(window.location.search).get('id');
  let thisAnime = animes.filter(anime => anime.id == animeID)[0];
  if (!thisAnime) window.location.href = '/';

  document.querySelector('.img').src = thisAnime.img;
  document.querySelector('.name').innerText = thisAnime.title;
  document.querySelector('.season').innerHTML += `${thisAnime.temp} Temporada`;
  document.querySelector('.launch').innerHTML += thisAnime.launch;
  document.querySelector('.desc').innerText = thisAnime.description;
}
initApp();