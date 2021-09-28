// asynchronous javascript
const btnSearch = document.querySelector('.search');
const btnNext = document.querySelector('.next');
const inputText = document.querySelector('input');
let inputKeyword;

// promises
async function getGif(keyword) {
  const image = document.querySelector('img');
  console.log('log');

  try {
    const gifData = await fetch(
      `https://api.giphy.com/v1/gifs/translate?api_key=QG5BvJxlshVGggQvolh6RucaEXHw4cqQ&s=${keyword}`,
      { mode: 'cors' }
    );
    const gifImage = await gifData.json();
    image.src = gifImage.data.images.original.url;
  } catch (err) {
    console.error('Field is empty');
  }
}

btnSearch.addEventListener('click', () => {
  getGif(inputText.value);
  inputKeyword = inputText.value;
  inputText.value = '';
});

btnNext.addEventListener('click', () => {
  getGif(inputKeyword);
});

//giphy api https://api.giphy.com/v1/gifs/translate?api_key=QG5BvJxlshVGggQvolh6RucaEXHw4cqQ&s=cats
//openweather api http://api.openweathermap.org/data/2.5/weather?q=Jakarta&APPID=d0c59a3b8526fb27afb9aa24179956fb
