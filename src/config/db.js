require('dotenv').config();
const development = {
  use_env_variable: 'DB_DAVELOPMENT_DATABASE',
  dialect: 'postgres',
  protocol: 'postgres',
};
const staging = {
  use_env_variable: 'DB_DAVELOPMENT_DATABASE',
  dialect: 'postgres',
  protocol: 'postgres',
};
const production = {
  use_env_variable: 'DB_DAVELOPMENT_DATABASE',
  dialect: 'postgres',
  protocol: 'postgres',
};

module.exports = {
  development,
  staging,
  production,
};