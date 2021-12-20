'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('todolists', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      content: {
        type: Sequelize.STRING
      },
      checkbox: {
        type: Sequelize.BOOLEAN
      },
      endtime: {
        type: Sequelize.STRING
      },
      color: {
        type: Sequelize.STRING
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
      queryInterface.addColumn('todolists', 'user_id', {
        type: Sequelize.INTEGER,
        allowNull: false,
        OnDelete: 'cascade',
        references: { model: 'users', key: 'id'}
      });
    })
    .then(() => {
      queryInterface.addColumn('todolists', 'tag_id', {
        type: Sequelize.INTEGER,
        allowNull: true, //tag 지정이 없는 경우는 Null
        OnDelete: 'cascade',
        references: { model: 'tags', key: 'id'}
      });
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('todolists');
  }
};
