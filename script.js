/* const overviews = document.getElementsByClassName('overview');
const movies = document.getElementsByClassName('movie');

Object.keys(movies).forEach((i) => {
  console.log(i, movies[i]);
  const movie = movies[i];
  movie.addEventListener('click', () => {
    console.log((movie.lastElementChild.style.display = 'block'));
    //movie.lastElementChild.style.visibility = 'visible';
    console.log('this');
  });
}); */

const API_URL =
  'http://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=8bdc7c4c2e117d340daa835481bab5d3&page=1';

const IMG_PATH = 'https://image.tmdb.org/t/p/w500';

const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?api_key=8bdc7c4c2e117d340daa835481bab5d3&query="';

const form = document.getElementById('form');
const search = document.getElementById('search');

// Get initial movies

async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();

  console.log(data.results);
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const searchTerm = search.value;

  if (searchTerm && searchTerm !== '') {
    getMovies(SEARCH_API + searchTerm);
    search.value = '';
  } else {
    window.location.reload();
  }
});
