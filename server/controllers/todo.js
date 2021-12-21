const { todolist: TodoModel } = require('../models');

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
      // for(let n = 0; n < result.length; n++) console.log(result[n].dataValues)
        result.map((el) => {
          el.dataValues.tags = el.dataValues.tags.split(',');
        });
        res.status(200).json({ data: result });
      })
      .catch((error) => {
        res.status(401).json({ message: 'failure' });
      });
  },
  post: (req, res) => { // db response 완료
    const userId = parseInt(req.params.userId, 10);
    if (Number.isNaN(userId)) return res.status(400).json({ message: 'failure' });
    const todoInfo = req.body.data;
    TodoModel.create({
      user_id: userId,
      content: todoInfo.content,
      checkbox: false,
      endtime: todoInfo.endtime,
      color: todoInfo.color,
      tags: todoInfo.tag.join()
    })
      .then(() => {
        TodoModel.findAll({
          where: {
            user_id: userId
          }
        })
          .then((result) => {
          // for(let n = 0; n < result.length; n++) console.log(result[n].dataValues)
            result.map((el) => {
              el.dataValues.tags = el.dataValues.tags.split(',');
            });
            res.status(200).json({ data: result });
          })
          .catch((error) => {
            res.status(401).json({ message: 'failure' });
          });
      })
      .catch((error) => {
        res.status(401).json({ message: 'failure' });
      });
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
          });
      })
      .catch(() => {
        res.status(401).json({ message: 'failure' });
      });
  },
  put: (req, res) => {
    const todoId = parseInt(req.query.todoId, 10);
    const userId = parseInt(req.params.userId, 10);
    const afterTodo = req.body.data;
    if (Number.isNaN(userId)) return res.status(400).json({ message: 'failure' });
    if (Number.isNaN(todoId)) return res.status(400).json({ message: 'failure' });
    TodoModel.update({
      checkbox: afterTodo.checkbox
    },
    {
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
          });
      });
  },
  show: (req, res) => { // undo 한 list를 리턴해준다.
    const userId = parseInt(req.params.userId, 10);
    if (Number.isNaN(userId)) return res.status(400).json({ message: 'failure' });
    TodoModel.findAll({
      where: {
        user_id: userId,
        checkbox: false
      }
    })
      .then((result) => {
        const now = new Date();
        const utcNow = now.getTime() + (now.getTimezoneOffset() * 60 * 1000);
        const koreaTimeDiff = 9 * 60 * 60 * 1000;
        const koreaNow = new Date(utcNow + koreaTimeDiff);
        // const thisMonth = koreaNow.getMonth() + 1
        const today = `${koreaNow.getFullYear()}-${koreaNow.getMonth() + 1}-${koreaNow.getDate()}`;
        const undoList = [];
        // console.log(new Date(`${today}`).getMonth() + 1) 전월 미달성 알람할 경우 진행.
        result.map((el) => {
        // console.log(new Date(el.dataValues.endtime).getMonth() + 1) // 전월 미달성 알람할 경우 진행.
          if (new Date(`${today}`) > new Date(el.dataValues.endtime)) {
            undoList.push(el);
          }
        });
        res.status(200).json({ data: undoList });
      });
  }
};
