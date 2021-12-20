'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class todolist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      todolist.belongsTo(models.tag, {
        foreignKey: 'tag_id', //todolists 테이블의 tag_id 필드의 데이터를 foreignKey로 설정
        as: 'tagId', //target 모델인 tag의 이름으로 사용된다.
        targetKey: 'id', //target 모델의 id 값이 todolist 모델의 tag_id의 값으로 사용된다.
        onDelete: 'cascade' //tag 모델에서 id 값이 삭제되면 todolist 모델에서 그 값이 삭제된다.
      });

      todolist.hasMany(models.user, { //source 모델인 user를 여러군데에서 참조하는 경우는 hasMany를 쓴다.
        foreignKey: 'user_id',
        sourceKey: 'id',
        onDelete: 'cascade'
      })
    }
  }
  todolist.init({
    content: DataTypes.STRING,
    checkbox: DataTypes.BOOLEAN,
    endtime: DataTypes.STRING,
    color: DataTypes.STRING,
    tag_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'todolist'
  });
  return todolist;
};
