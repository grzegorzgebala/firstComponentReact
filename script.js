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

var MovieTitle = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired,
  },

  render: function() { 
    return (
      React.createElement('li', {}, 
        React.createElement('h2', {}, this.props.title)
      )
    )}
});

var MovieDescription = React.createClass({
  propTypes: {
    desc: React.PropTypes.string.isRequired,
  },

  render: function() {
    console.log(this.props);
    return React.createElement('p', {}, this.props.desc)
  }
});

var MovieImage = React.createClass({
  propTypes: {
    poster: React.PropTypes.string.isRequired,
  },

  render: function(item) {
    return React.createElement('img', {src: this.props.poster})
  }
});

var Movie = React.createClass({
  propTypes: {
    movie: React.PropTypes.object.isRequired,
  },

  render: function() {
    var movie = this.props.movie;
    return (
      React.createElement('li', {}, 
          React.createElement(MovieTitle, {title: movie.title}),
          React.createElement(MovieDescription, {desc: movie.desc}),
          React.createElement(MovieImage, {poster: movie.poster})
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
      return React.createElement(Movie, {key: item.id, movie: item})
      })
    return (
      React.createElement('div', {},
        React.createElement('h1', {}, 'Lista filmów'),
        React.createElement('ul', {}, moviesList)
        )
    )
  }
});

var element = React.createElement(MoviesList, {data: movies});
ReactDOM.render(element, document.getElementById('app'));