const sequelize = require('sequelize');

module.exports = {
  get: (req, res) => {
    const id = parseInt(req.params.userId, 10);
    if (Number.isNaN(id)) return res.status(400).json({ message: 'failure' });
    UserModel.findOne({
      where: {
        id: id
      }
    }).then(user => {
      if (!user) return res.status(404).json({ message: 'failure' });
      res.status(200).json({ data: user });
    });
    // res.status(200).json({ message: '유저의 정보가 조회되었습니다.' });
  },
  patch: (req, res) => { // put 학습하고 진행
    const id = parseInt(req.params.userId, 10);
    if (Number.isNaN(id)) return res.status(400).json({ message: 'failure' });
    const afterUserInfo = req.body.afterUserInfo;
    UserModel.update({ afterUserInfo }, {
      where: {
        id: id
      }
    })
      .then((result) => {
        res.status(201).json({ data: result });
        // 이 부분은 더미 데이터 생성 시 확인할 필요가 있음
      })
      .catch((err) => {
        res.status(400).json({ message: 'failure' });
      });
    // res.status(200).json({ message: '유저의 정보가 수정되었습니다.' });
  }
};
