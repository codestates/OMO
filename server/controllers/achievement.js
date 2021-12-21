const { monthly_achievement: AchievementModel, todolist: TodoModel } = require('../models');

module.exports = {
  get: (req, res) => {
    const userId = parseInt(req.params.userId, 10);
    if (Number.isNaN(userId)) return res.status(400).json({ message: 'failure' });
    AchievementModel.findAll({
      where: {
        user_id: userId
      }
    })
      .then((result) => {
        res.status(200).json({ data: result });
      })
      .catch((error) => {
        res.status(404).json({ message: 'failure' });
      });
  },
  post: (req, res) => {
    const userId = parseInt(req.params.userId, 10);
    if (Number.isNaN(userId)) return res.status(400).json({ message: 'failure' });
    TodoModel.findAll({
      where: {
        user_id: userId
      }
    })
      .then((result) => {
        const successList = [];
        const failedList = [];
        const now = new Date();
        const utcNow = now.getTime() + (now.getTimezoneOffset() * 60 * 1000);
        const koreaTimeDiff = 9 * 60 * 60 * 1000;
        const koreaNow = new Date(utcNow + koreaTimeDiff);
        const thisMonth = new Date(`${koreaNow.getFullYear()}-${koreaNow.getMonth() + 1}`); // 이번 달
        let month;
        let targetMonth;
        result.map((el) => {
          month = new Date(el.dataValues.endtime);
          // console.log(new Date(`${month.getFullYear()}-${month.getMonth() + 1}`))
          targetMonth = new Date(`${month.getFullYear()}-${month.getMonth() + 1}`); // todolist의 달을 구하는 거
          if (el.dataValues.checkbox && thisMonth > targetMonth) {
            successList.push(el.dataValues);
          } else if (!el.dataValues.checkbox && thisMonth > targetMonth) {
            failedList.push(el.dataValues);
          }
        });
        const successRate = successList.length + 1 / successList.length + 1 + failedList.length + 1;
        AchievementModel.findOrCreate({
          where: {
            month: `${month.getFullYear()}-${month.getMonth() + 1}`,
            user_id: userId
          },
          defaults: {
            month: `${month.getFullYear()}-${month.getMonth() + 1}`,
            user_id: userId,
            monthlyAchievementRatio: Math.floor(successRate * 10)
          }
        })
          .then((result) => {
            res.status(200).json({ data: result });
          })
          .catch((error) => {
            res.status(400).json({ message: 'failure' });
          });
      })
      .catch((error) => {
        res.status(400).json({ message: 'failure' });
      });
  }
};
