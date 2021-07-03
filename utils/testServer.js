const express = require('express');
const supertest = require('supertest');

/* create little test server for the app */
const testServer = (route) => {
  const app = express();
  route(app);
  return supertest(app);
};

module.exports = testServer;
