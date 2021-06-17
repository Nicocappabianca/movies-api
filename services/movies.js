const { moviesMock } = require('../utils/mocks/movies');

class MoviesService {
  getMovies = async () => {
    const movies = await Promise.resolve(moviesMock);
    return movies || [];
  };

  getMovie = async () => {
    const movie = await Promise.resolve(moviesMock[0]);
    return movie || {};
  };

  createMovie = async () => {
    const createdMovieId = await Promise.resolve(moviesMock[0].id);
    return createdMovieId;
  };

  updateMovie = async () => {
    const updatedMovieId = await Promise.resolve(moviesMock[0].id);
    return updatedMovieId;
  };

  deleteMovie = async () => {
    const deletedMovieId = await Promise.resolve(moviesMock[0].id);
    return deletedMovieId;
  };
}

module.exports = MoviesService;
