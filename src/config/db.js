require('dotenv').config();
const development = {
  "username": process.env.DB_USERNAME,
  "password": process.env.DB_PASSWORD,
  "database": process.env.DB_DAVELOPMENT_DATABASE,
  "host": "127.0.0.1",
  "dialect": "postgres"
};
const staging = {
  "username": process.env.DB_USERNAME,
  "password": process.env.DB_PASSWORD,
  "database": process.env.DB_STAGING_DATABASE,
  "host": "127.0.0.1",
  "dialect": "postgres"
};
const production = {
  "username": process.env.DB_USERNAME,
  "password": process.env.DB_PASSWORD,
  "database": process.env.DB_PRODUCTION_DATABASE,
  "host": "127.0.0.1",
  "dialect": "postgres"
};

module.exports = {
  development,
  staging,
  production,
};