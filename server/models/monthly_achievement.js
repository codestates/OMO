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
    static associate (models) {
      // define association here
    }
  }
  monthly_achievement.init({
    user_id: DataTypes.STRING,
    month: DataTypes.STRING,
    monthlyAchievementRatio: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'monthly_achievement'
  });
  return monthly_achievement;
};
