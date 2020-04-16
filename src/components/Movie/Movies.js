import React, { Component } from "react";
import { Link } from "react-router-dom";
import MovieList from "./MovieList";
import MovieService from "../../services/MovieService";

export default class Movies extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    this.setState(() => ({ movies: MovieService.getMovies() }));
  }

  render() {
    return (
      <div className="container-fluid" style={{ marginLeft: "-15px" }}>
        <div className="d-flex flex-row">
          <div className="col-sm-12">
            <Link to="/add-movie" className="btn btn-primary m-3">
              Add new movie
            </Link>
            <MovieList movies={this.state.movies} />
          </div>
        </div>
      </div>
    );
  }
}
