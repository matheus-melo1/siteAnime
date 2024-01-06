const controls = document.querySelectorAll('.control');
let currentItem = 0;
const items = document.querySelectorAll('.item');
const maxItems = items.length;

controls.forEach(control => {
  control.addEventListener('click', () => {
    const arrowleft = control.classList.contains('arrow-left');

    if(arrowleft) {
      currentItem -= 6;
    } else {
      currentItem += 6;
    }

    if(currentItem >= maxItems) {
      currentItem = 0;
    }

    if(currentItem < 0) {
      currentItem = maxItems - 1;
    }

    items[currentItem].scrollIntoView({
      behavior: "smooth",
    })
  })
});