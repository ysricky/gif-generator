// asynchronous javascript
const image = document.querySelector('img');
const inputText = document.querySelector('input');
const btnSearch = document.querySelector('.search');
const btnNext = document.querySelector('.next');
let inputKeyword;

// promises
const getGif = (keyword) => {
  fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=QG5BvJxlshVGggQvolh6RucaEXHw4cqQ&s=${keyword}`,
    { mode: 'cors' }
  )
    .then((response) => response.json())
    .then((response) => {
      image.src = response.data.images.original.url;
    })
    .catch((err) => {
      console.log(err);
    });
};

btnSearch.addEventListener('click', () => {
  inputKeyword = inputText.value;
  getGif(inputText.value);
  inputText.value = '';
});

btnNext.addEventListener('click', () => {
  getGif(inputKeyword);
});

//giphy api https://api.giphy.com/v1/gifs/translate?api_key=QG5BvJxlshVGggQvolh6RucaEXHw4cqQ&s=cats
//openweather api http://api.openweathermap.org/data/2.5/weather?q=Jakarta&APPID=d0c59a3b8526fb27afb9aa24179956fb
