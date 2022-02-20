require('dotenv').config();
const development = {
  use_env_variable: 'DB_DAVELOPMENT_DATABASE',
  dialect: 'postgres',
  protocol: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
};

module.exports = {
  development,
};