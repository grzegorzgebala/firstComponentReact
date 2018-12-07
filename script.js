
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
      React.createElement('li', {}, 
        React.createElement('h2', {}, this.props.movie.title),
        React.createElement('p', {}, this.props.movie.desc),
        React.createElement('img', {src: this.props.movie.poster} )
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
        React.createElement(Movie, {key: item.id, movie: item})
      );
    });

    return (
      React.createElement('ul', {}, moviesList)
    );
  }
});

var element = React.createElement(MoviesList, {data: movies});
ReactDOM.render(element, document.getElementById('app'));