
var movies = [
  {
    id: 1,
    title: 'Harry Potter',
    desc: 'film o czarodzieju',
    poster: 'harry.jpg'
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    poster: 'krol.jpg'
  },
  {
    id: 3,
    title: 'Incepcja',
    desc: 'Film o Incepcji :)',
    poster: 'incepcja.jpg'
  }
];  

var Movie = React.createClass({
  propTypes: {
    movies: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
      React.createElement('li', {key: movies.id},
        React.createElement('h2', {}, movies.title),
        React.createElement('p', {}, movies.desc),
        React.createElement('img', {src: movies.poster} )
      )
    )
  }
});

var element = React.createElement(Movie, {key: movies.id, title: movies.title, desc: movies.desc, poster: movies.poster},);
ReactDOM.render(element, document.getElementById('app'));

/*
var image = {
  name: 'Kotek',
  src: 'http://imgur.com/n8OYCzR.png'
};

var GalleryItem = React.createClass({
  propTypes: {
    image: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
      React.createElement('div', {},
        React.createElement('h2', {}, this.props.image.name),
        React.createElement('img', {src: this.props.image.src})
      )
    )
  },
});

var element = React.createElement(GalleryItem, {image: image});
ReactDOM.render(element, document.getElementById('app'));


/*
var movies = [
  {
    id: 1,
    title: 'Harry Potter',
    desc: 'film o czarodzieju',
    poster: 'harry.jpg'
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    poster: 'krol.jpg'
  },
  {
    id: 3,
    title: 'Incepcja',
    desc: 'Film o Incepcji :)',
    poster: 'incepcja.jpg'
  }
];	

var moviesElements = movies.map(function(movie) {
  return React.createElement('li', {key: movie.id},
      React.createElement('h2', {}, movie.title),
      React.createElement('p', {}, movie.desc),
      React.createElement('img', {src: movie.poster} )
    );
});

var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)
  );

ReactDOM.render(element, document.getElementById('app'));*/