'use strict';

const insuranceTypes = [
  {name: 'Auto'},
  {name: 'Fire'},
  {name: 'Flood'},
]

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('InsuranceTypes', [...insuranceTypes]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('InsuranceTypes', null, {});
  }
};
