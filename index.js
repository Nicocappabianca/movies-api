const express = require('express');
const cors = require('cors');
const app = express();

const { config } = require('./config/index');
const moviesApi = require('./routes/movies');

const {
  logErrors,
  errorHandler,
  wrapErrors,
} = require('./utils/middleware/errorHandlers.js');

const notFoundHandler = require('./utils/middleware/notFoundHandler.js');

/* Body pasrer middleware */
app.use(express.json());

/* CORS (Cross-origin resource sharing) middleware */
app.use(cors());

/* Routes */
moviesApi(app);

/* Catch 404 */
app.use(notFoundHandler);

/* Error middlewares */
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.listen(config.port, () => {
  console.log(`Listening http://localhost:${config.port}`);
});
