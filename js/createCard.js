import animes from './anime.js';
import animeRecent from './animeRecent.js';

const initApp = () => {
  let container = document.querySelector('#animesContainer');

  animes.forEach(animes => {
    container.innerHTML += `
      <div class="w-40 max-[528px]:w-full shrink-0 h-64 max-[528px]:h-72 rounded-xl relative hover:-translate-y-2 ease-in duration-200 overflow-hidden">
        <a href="/detail.html?id=${animes.id}">
          <div class="w-full h-96 absolute -top-52 text-white flex justify-center items-center z-20 text-3xl hover:-top-16 ease-in-out duration-500"><i class="fa-solid fa-play"></i></div>
          <p class="font-inter z-10 text-white absolute bottom-0 p-2 w-full h-full flex items-end bg-gradient-to-b from-transparent to-black">${animes.title}</p>
          <div class="absolute z-30 right-2 top-2 px-2 py-1 rounded-full text-white bg-black/60 hover:text-red-400 ease-in duration-150 max-sm:hover:text-white">
            <i class="fa-regular fa-heart"></i>
          </div>
          <img class="w-full h-full rounded-xl" src="${animes.img}" alt="">
        </a>
      </div>
    `
  })
}

initApp();

// codigo opcional
{/* <div class="absolute left-1 top-3 py-1 px-2 text-white bg-black/60 rounded-xl text-sm font-inter">
  <i class="fa-solid fa-film"></i> ${animes.type} • ${animes.launch}
</div> */}

const initEp = () => {
  let animeRecents = document.querySelector('#animeRecent');

  animeRecent.forEach(anime => {
    // const { title, ep, img } = anime
    animeRecents.innerHTML += `
    <div title="${anime.title}" class="item w-64 h-36 flex shrink-0 rounded-xl relative overflow-hidden">
      <a href="#">
        <div class="font-inter text-white absolute bottom-0 p-2 w-full h-full flex flex-col justify-end bg-gradient-to-b from-transparent to-black">
          <p class="flex-nowrap">${anime.title}</p>
          <p class="text-sm">Episódio ${anime.ep}</p>
        </div>
        <img class="w-full h-full rounded-xl" src="${anime.img}" alt="">
      </a>
    </div>
    `
  })
}

initEp();