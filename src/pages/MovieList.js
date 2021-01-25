import React, { Component } from 'react';
import { Loading } from '../components';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchMovies();
  }

  async fetchMovies() {
    const fetchedMovies = await movieAPI.getMovies();
    console.log(fetchedMovies);
    this.setState({
      movies: fetchedMovies,
      loading: false,
    });
  }

  render() {
    const { movies, loading } = this.state;

    // Render Loading here if the request is still happening

    return (
      <div data-testid="movie-list" className="movie-list">
        {
          loading
            ? <Loading />
            : movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)
        }

      </div>
    );
  }
}

export default MovieList;
