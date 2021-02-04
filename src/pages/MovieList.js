import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import MovieCard from '../components/MovieCard';

import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      load: true,
    };

    this.spreadMovies = this.spreadMovies.bind(this);
    this.importMovies = this.importMovies.bind(this);
  }

  spreadMovies() {
    this.importMovies(movieAPI.getMovies());
  }

  importMovies(final) {
    this.setState(
      { load: true },
      async () => {
        this.setState({
          movies: await final,
          load: false,
        });
      },
    );
  }

  render() {
    const { movies, load } = this.state;

    // Render Loading here if the request is still happening

    return (
      <div>
        <p><Link to="movies/:id">ADICIONAR CARTÃO</Link></p>
        <div className="movie-list" data-testid="movie-list">
          {load ? <Loading />
            : movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        </div>
      </div>
    );
  }
}

export default MovieList;
