'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      user.hasMany(models.monthly_achievement, { // source 모델인 user를 여러군데에서 참조하는 경우는 hasMany를 쓴다.
        foreignKey: 'user_id',
        sourceKey: 'id',
        onDelete: 'cascade'
      });

      user.hasMany(models.todolist, { // source 모델인 user를 여러군데에서 참조하는 경우는 hasMany를 쓴다.
        foreignKey: 'user_id',
        sourceKey: 'id',
        onDelete: 'cascade'
      });
      // define association here
    }
  }
  user.init({
    userId: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    socialLogin: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'user'
  });
  return user;
};
