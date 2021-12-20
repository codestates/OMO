const { monthly_achievement : AchievementModel, todolist: TodoModel } = require('../models');

module.exports = {
  get: (req, res) => {
    const userId = parseInt(req.params.userId, 10);
    if (Number.isNaN(userId)) return res.status(400).json({ message: 'failure' });
    AchievementModel.findAll({
      where : {
        user_id : userId,
      }
    })
    .then((result) => {
      res.status(200).json({ data : result })
    })
    .catch((error) => {
      res.status(404).json({ message: 'failure' });
    })
  },
  post: (req, res) => {
    const userId = parseInt(req.params.userId, 10);
    if (Number.isNaN(userId)) return res.status(400).json({ message: 'failure' });
    TodoModel.findAll({
      where: {
        user_id: userId,
        checkbox: false
      }
    })
    .then((result) => {
      // result에서 lastDay보다는 크고. 
      const now = new Date()
      const utcNow = now.getTime() + (now.getTimezoneOffset() * 60 * 1000);
      const koreaTimeDiff = 9 * 60 * 60 * 1000;
      const koreaNow = new Date(utcNow + koreaTimeDiff);
      // const thisMonth = koreaNow.getMonth() + 1
      const lastDay = new Date(koreaNow.getFullYear(), koreaNow.getMonth(), 1) // 전월의 마지막날
      const nextFirstDay = new Date(koreaNow.getFullYear(), koreaNow.getMonth() + 1) // 이번 달 마지막 날
      // console.log(new Date())
      console.log(nextFirstDay)
      const undoList = [];
      // console.log(new Date(today) > new Date('2021-11'))
      // result.map((el) => {
      //   const todoInfo = new Date(el.dataValues.endtime)
      //   // if(new Date(`${today}`) > new Date(el.dataValues.endtime)){
      //   //   undoList.push(el)
      //   // }
      // })
      res.status(200).json({ data: undoList });
    })
  }
};
