const { config } = require('../config');

const cacheResponse = (res, seconds) => {
  /* don't excecute cache response in development */
  if (!config.dev) {
    res.set('Cache-Control', `public, max-age=${seconds}`);
  }
};

module.exports = cacheResponse;
