const { todolist: TodoModel, tag: TagModel } = require('../models');

module.exports = {
  get: (req, res) => { // db response 완료
    const userId = parseInt(req.params.userId, 10);
    if (Number.isNaN(userId)) return res.status(400).json({ message: 'failure' });
    TodoModel.findAll({
      where: {
        user_id: userId
      }
    })
    .then((result) => {
      res.status(200).json({ data: result });
    })
    .catch((err) => {
      res.status(401).json({ message: 'failure' });
    })
  },
  post: (req, res) => { // db response 완료
    const userId = parseInt(req.params.userId, 10);
    if (Number.isNaN(userId)) return res.status(400).json({ message: 'failure' });
    const todoInfo = req.body.data;
    TagModel.findOrCreate({
      where : {
        tagName : todoInfo.tag
      },
      defaults: {
        tagName : todoInfo.tag
      }
    })
    .then((result) => {
      TodoModel.create({
        user_id : userId,
        content : todoInfo.content,
        checkbox : false,
        endtime : todoInfo.endtime,
        color : todoInfo.color,
        tag_id : result[0].id
      })
      .then((todoList) => {
        res.status(201).json(todoList)
      })
    })
  },
  delete: (req, res) => { // db response 완료
    const todoId = parseInt(req.query.todoId, 10);
    const userId = parseInt(req.params.userId, 10);
    if (Number.isNaN(userId)) return res.status(400).json({ message: 'failure' });
    if (Number.isNaN(todoId)) return res.status(400).json({ message: 'failure' });
    TodoModel.destroy({
      where: {
        id: todoId
      }
    })
      .then(() => {
        TodoModel.findAll({
          where: {
            user_id: userId
          }
        }) // 삭제 시 no content를 사용하는 데 이 부분에 대해 고민
        .then((todoList) => {
          res.status(200).json({ data: todoList });
        })
      })
      .catch(() => {
        res.status(401).json({ message: 'failure' });
      });
  },
  put: (req, res) => {
    // const todoId = parseInt(req.query.todoId, 10);
    // const userId = parseInt(req.params.userId, 10);
    // const afterTodo = req.body.data
    // if (Number.isNaN(userId)) return res.status(400).json({ message: 'failure' });
    // if (Number.isNaN(todoId)) return res.status(400).json({ message: 'failure' });
    // TodoModel.update({
    //   content : afterTodo.content,
    //   endtime : afterTodo.endtime,
    //   color : afterTodo.color,
    //   checkbox : afterTodo.checkbox
    // }, 
    // {
    //   where: {
    //     id: todoId
    //   }
    // })
  },
  show: (req, res) => {
    const userId = parseInt(req.params.userId, 10);
    if (Number.isNaN(userId)) return res.status(400).json({ message: 'failure' });
    TodoModel.findAll({
      where: {
        user_id: userId,
        checkbox: false
      }
    })
    .then((result) => {
      const now = new Date()
      const utcNow = now.getTime() + (now.getTimezoneOffset() * 60 * 1000);
      const koreaTimeDiff = 9 * 60 * 60 * 1000;
      const koreaNow = new Date(utcNow + koreaTimeDiff);
      // const thisMonth = koreaNow.getMonth() + 1
      const today = `${koreaNow.getFullYear()}-${koreaNow.getMonth() + 1}-${koreaNow.getDate()}`
      const undoList = [];
      // console.log(new Date(`${today}`).getMonth() + 1) 전월 미달성 알람할 경우 진행.
      result.map((el) => {
        // console.log(new Date(el.dataValues.endtime).getMonth() + 1) // 전월 미달성 알람할 경우 진행.
        if(new Date(`${today}`) > new Date(el.dataValues.endtime)){
          undoList.push(el)
        }
      })
      res.status(200).json({ data: undoList });
    })
  }
};
