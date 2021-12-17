'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('users', [
      {
        id: '1',
        userId: 'test1',
        username: 'test1',
        password: '1234',
        socialLogin: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '2',
        userId: 'test2',
        username: 'test2',
        password: '1234',
        socialLogin: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '3',
        userId: 'test3',
        username: 'test3',
        password: '1234',
        socialLogin: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('users', null, {});
  }
};
