import movies from './movies.json';

export default class MovieService {

    static getMovies() {
        return movies ? movies : [];
    }

    movies.filter((movie) => { movie._id !== process._id })
}