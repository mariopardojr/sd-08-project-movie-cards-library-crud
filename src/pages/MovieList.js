import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: false,
    };
  }

  componentDidMount() {
    this.fetchMovies();
  }

  fetchMovies() {
    this.setState(() => ({ loading: true }), () => {
      movieAPI.getMovies().then((resolve) => {
        this.setState(() => (
          {
            movies: resolve,
            loading: false,
          }
        ));
      });
    });
  }

  render() {
    const { movies, loading } = this.state;
    return (
      <div data-testid="movie-list" className="movie-list">
        { loading && <Loading /> }
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
