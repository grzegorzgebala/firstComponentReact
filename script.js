
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
    title: React.PropTypes.object.isRequired,
  },

  render: function() { 
    return (
      React.createElement('li', {}, 
        React.createElement('h2', {}, this.props.title.title)
      )
    )}
});

var MovieDescription = React.createClass({
  propTypes: {
    desc: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
      React.createElement('li', {},
        React.createElement('p', {}, this.props.desc.desc)
      )
    )
  }
});

var MovieImage = React.createClass({
  propTypes: {
    poster: React.PropTypes.object.isRequired,
  },

  render: function(item) {
    return (
      React.createElement('li', {}, 
        React.createElement('img', {}, this.props.poster.poster)
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
        React.createElement(MovieTitle, {key: item.id, title: item}),
        React.createElement(MovieDescription, {key: item.id, desc: item})
        //React.createElement(MovieImage, {key: item.id, poster: item})
      );
    });

    return (
      React.createElement('ul', {}, moviesList)
    );
  }
});

var element = React.createElement(MoviesList, {data: movies});
ReactDOM.render(element, document.getElementById('app'));