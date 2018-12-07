
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
    movie: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
      React.createElement('div', {},
        React.createElement('h1', {}, 'Lista filmów')
      )
    )
  }
});

var MovieTitle = React.createClass({
  propTypes: {
    movieTitle: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
      React.createElement('li', {}, 
        React.createElement('h2', {}, this.props.movie.title)
      )
    )
  }
});

var MovieDescription = React.createClass({
  propTypes: {
    movieDescription: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
      React.createElement('li', {},
        React.createElement('p', {}, this.props.movie.desc)
      )
    )
  }
});

var MovieImage = React.createClass({
  propTypes: {
    movieImage: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
      React.createElement('li', {}, 
        React.createElement('img', {}, this.props.movie.poster)
      )
    )
  }
});

var MoviesList = React.createClass({
  propTypes: {
    data: React.PropTypes.array.isRequired,
  },

  render: function () {
    var moviesList = this.props.data.map(function(item){
      return (
        React.createElement(Movie, {key: item.id, movie: item}),
        React.createElement(MovieTitle, {key: item.id, movieTitle: item}),
        React.createElement(MovieDescription, {key: item.id, movieDescription: item}),
        React.createElement(MovieImage, {key: item.id, movieImage: item})
      );
    });

    return (
      React.createElement('ul', {}, moviesList)
    );
  }
});

var element = React.createElement(MoviesList, {data: movies});
ReactDOM.render(element, document.getElementById('app'));