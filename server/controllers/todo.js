const sequelize = require('sequelize');

module.exports = {
  get: (req, res) => {
    const id = parseInt(req.params.userId, 10);
    if (Number.isNaN(id)) return res.status(400).json({ message: 'failure' });
    const todoList = TodoModel.findAll({
      where: {
        userId: id
      }
    });
    if (!todoList) return res.status(401).json({ message: 'failure' });
    else {
      res.status(200).json({ data: todoList });
    }
    // res.status(200).json({ message : 'todo list 조회가 되었습니다.'})
  },
  post: (req, res) => {
    const id = parseInt(req.params.userId, 10);
    if (Number.isNaN(id)) return res.status(400).json({ message: 'failure' });
    const todoInfo = req.body.data;
    TodoModel.create({
      todoInfo
    })
      .then((result) => {
        res.status(200).json({ data: result });
      })
      .catch((err) => {
        res.status(400);
      });
    // res.status(200).json({ message : 'todo list 추가 되었습니다.'})
  },
  delete: (req, res) => {
    const todoId = req.query.todoId;
    TodoModel.destroy({
      where: {
        id: todoId
      }
    })
      .then((res) => {
        res.status(200).json({ message: 'ok' });
      })
      .catch((res) => {
        res.status(401).json({ message: 'failure' });
      });
  }
};
