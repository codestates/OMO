'use strict';
const dummySource = require('../quotes/dummyQuotes.js');

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('quotes', dummySource.dummySource, {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('quotes', null, {});
  }
};
