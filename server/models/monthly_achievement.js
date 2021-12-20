'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class monthly_achievement extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      monthly_achievement.hasMany(models.user, { //source 모델인 user를 여러군데에서 참조하는 경우는 hasMany를 쓴다.
        foreignKey: 'user_id',
        sourceKey: 'id',
        onDelete: 'cascade'
      })
    }
  };
  monthly_achievement.init({
    month: DataTypes.STRING,
    monthlyAchievementRatio: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'monthly_achievement',
  });
  return monthly_achievement;
};