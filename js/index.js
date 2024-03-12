let mainApp = document.querySelector('#navbar');

const loadTemplate = () => {
  fetch('template.html')
    .then(response => response.text())
    .then(html => {
      mainApp.innerHTML += html;
    })
}

loadTemplate();