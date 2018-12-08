'use strict';

var movies = [
  {
    id: 1,
    title: 'Hobbit',
    desc: 'O niziołkach, czarodziejach, elfach, orkach itp.',
    poster: 'img/hobbit.jpg'
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film animowany o królu sawanny.',
    poster: 'img/krol_lew.jpg'
  },
  {
    id: 3,
    title: 'Avengers',
    desc: 'Film o superbohaterach.',
    poster: 'img/avengers.jpg'
  },
  {
    id: 4,
    title: 'Iron Man',
    desc: 'Film o superbohaterze.',
    poster: 'img/ironman.jpg'
  }
 ];

var moviesElements =
  movies.map(function(movie) {
  return React.createElement('li', {key: movie.id},
         React.createElement('h2', {}, movie.title),
         React.createElement('p', {}, movie.desc),
         React.createElement('img', {src: movie.poster})
  );
});

var element =
  React.createElement('div', {},
  React.createElement('h1', {}, 'Lista filmów'),
  React.createElement('ul', {}, moviesElements),
);

  ReactDOM.render(element, document.getElementById('app'));
