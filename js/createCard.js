for(let i = 0; i < animeTrend.length; i++) {
  const animeContainer = document.querySelector('#animeTrend');
  const { img, title, ep } = animeTrend[i];

  animeContainer.innerHTML += `
    <div title="${title}" class="item w-64 h-36 flex shrink-0 rounded-xl relative overflow-hidden">
      <a href="#">
        <div class="font-inter text-white absolute bottom-0 p-2 w-full h-full flex flex-col justify-end bg-gradient-to-b from-transparent to-black">
          <p class="flex-nowrap">${title}</p>
          <p class="text-sm">Episódio ${ep}</p>
        </div>
        <img class="w-full h-full rounded-xl" src="${img}" alt="">
      </a>
    </div>
  `
}

for(let i = 0; i < animes.length; i++) {
  const container = document.querySelector('#animesContainer');
  const { img, title } = animes[i];

  container.innerHTML += `
    <div class="w-40 max-[528px]:w-full shrink-0 h-64 max-[528px]:h-72 rounded-xl relative hover:-translate-y-2 ease-in duration-200 overflow-hidden">
      <a href="#">
        <div class="w-full h-96 absolute -top-52 text-white flex justify-center items-center z-20 text-3xl hover:-top-16 ease-in-out duration-500"><i class="fa-solid fa-play"></i></div>
        <p class="font-inter z-10 text-white absolute bottom-0 p-2 w-full h-full flex items-end bg-gradient-to-b from-transparent to-black">${title}</p>
        <img class="w-full h-full rounded-xl" src="${img}" alt="">
      </a>
    </div>
  `
}