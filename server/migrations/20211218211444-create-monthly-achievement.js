'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('monthly_achievements', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      month: {
        type: Sequelize.STRING
      },
      monthlyAchievementRatio: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
    .then(() => {
      queryInterface.addColumn('monthly_achievements', 'user_id', {
        type: Sequelize.INTEGER,
        allowNull: false,
        OnDelete: 'cascade',
        references: { model: 'users', key: 'id'}
      });
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('monthly_achievements');
  }
};