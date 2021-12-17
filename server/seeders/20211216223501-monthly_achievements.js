'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('monthly_achievements', [
      {
        id: '1',
        user_id: '1',
        month: '2021-12-16 22:04:50',
        monthlyAchievementRatio: '78',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '2',
        user_id: '2',
        month: '2021-12-16 22:04:50',
        monthlyAchievementRatio: '88',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '3',
        user_id: '3',
        month: '2021-12-16 22:04:50',
        monthlyAchievementRatio: '98',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('monthly_achievements', null, {});
  }
};
