import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };
    this.renderMovies = this.renderMovies.bind(this);
    this.fazRequisicao = this.fazRequisicao.bind(this);
  }

  componentDidMount() {
    this.fazRequisicao();
  }

  async fazRequisicao() {
    const aguardaRequisicao = await movieAPI.getMovies();
    this.setState({
      movies: aguardaRequisicao,
      loading: false,
    });
  }

  renderMovies() {
    const { movies } = this.state;
    return (
      <div
        data-testid="movie-list"
      >
        { movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }

  render() {
    const { loading } = this.state;
    return (
      <main>
        { loading ? <Loading /> : this.renderMovies() }
      </main>
    );
  }
}

export default MovieList;
