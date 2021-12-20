'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('tags', [
      {
        id: '1',
        tagName: '회사',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '2',
        tagName: '오전',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '3',
        tagName: '가족',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '4',
        tagName: '급함',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('tags', null, {});
  }
};
