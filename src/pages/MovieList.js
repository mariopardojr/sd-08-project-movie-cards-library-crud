import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieList extends Component {
  constructor() {
    super();

    this.callCard = this.callCard.bind(this);

    this.state = {
      movies: [],
      loading: false,
    };
  }

  async componentDidMount() {
    this.callCard();
  }

  callCard() {
    this.setState({ loading: true }, () => {
      movieAPI.getMovies().then((response) => this.setState({
        movies: response,
        loading: false,
      }));
    });
  }

  render() {
    const { movies, loading } = this.state;
    // Render Loading here if the request is still happening
    return (
      <div data-testid="movie-list" className="movie-list">
        {loading ? <Loading />
          : movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
