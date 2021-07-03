const assert = require('assert');
const proxyquire = require('proxyquire');

const {
  moviesMock,
  moviesServiceMock,
  MoviesServiceMock,
} = require('../utils/mocks/movies');
const testServer = require('../utils/testServer');

describe('routes - movies', () => {
  const route = proxyquire('../routes/movies', {
    /* indicate that real service will be replaced by MoviesServiceMock */
    '../services/movies': MoviesServiceMock,
  });

  /* load only this specific route */
  const request = testServer(route);

  describe('GET /movies', () => {
    it('should respond with status 200', (done) => {
      request.get('/api/movies').expect(200, done);
    });

    it('should respond with the list of movies', (done) => {
      request.get('/api/movies').end((err, res) => {
        assert.deepEqual(res.body, {
          data: moviesMock,
          message: 'movies listed',
        });
        done(); /* indicate that test finish here */
      });
    });
  });
});
