const express = require('express');
const { moviesMock } = require('../utils/mocks/movies');

const moviesApi = (app) => {
  const router = express.Router();
  app.use('/api/movies', router);

  router.get('/', async (req, res, next) => {
    try {
      const movies = await Promise.resolve(moviesMock);

      res.status(200).json({
        data: movies,
        message: 'movies listed',
      });
    } catch (error) {
      next(err);
    }
  });

  router.get('/:movieID', async (req, res, next) => {
    try {
      const movies = await Promise.resolve(moviesMock[0]);

      res.status(200).json({
        data: movies,
        message: 'movies retrieved',
      });
    } catch (error) {
      next(err);
    }
  });

  router.post('/', async (req, res, next) => {
    try {
      const createdMovieId = await Promise.resolve(moviesMock[0].id);

      res.status(201).json({
        data: createdMovieId,
        message: 'movie created',
      });
    } catch (error) {
      next(err);
    }
  });

  router.put('/:movieID', async (req, res, next) => {
    try {
      const updatedMovieId = await Promise.resolve(moviesMock[0].id);

      res.status(200).json({
        data: updatedMovieId,
        message: 'movie updated',
      });
    } catch (error) {
      next(err);
    }
  });

  router.delete('/:movieID', async (req, res, next) => {
    try {
      const deletedMovieId = await Promise.resolve(moviesMock[0].id);

      res.status(200).json({
        data: deletedMovieId,
        message: 'movie deleted',
      });
    } catch (error) {
      next(err);
    }
  });
};

module.exports = moviesApi;
