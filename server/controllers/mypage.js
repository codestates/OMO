const { users: UserModel } = require('../models');

module.exports = {
  get: (req, res) => { // db response 완료 => username, id만 보낼 수 있도록 수정하기
    const userId = parseInt(req.params.userId, 10);
    if (Number.isNaN(userId)) return res.status(400).json({ message: 'failure' });
    UserModel.findOne({
      where: {
        id: userId
      }
    }).then(result => {
      const userInfo = {
        userId : result.userId,
        username : result.username,
        socialLogin : result.socialLogin
      }
      res.status(200).json({ data: userInfo });
    })
    .catch((error) => {
      res.status(404).json({ message: 'failure' });
    })
    // res.status(200).json({ message: '유저의 정보가 조회되었습니다.' });
  },
  put: (req, res) => { // db response 완료 => put 변경
    const userId = parseInt(req.params.userId, 10);
    if (Number.isNaN(userId)) return res.status(400).json({ message: 'failure' });
    const afterUserInfo = req.body.data.afterUserInfo;
    // res.send({username : afterUserInfo.username})
    UserModel.update({username : afterUserInfo.username, password : afterUserInfo.password}, {
      where: {
        id: userId
      }
    })
    .then(() => {
      UserModel.findOne({
        where: {
          id: userId,
        }
      })
      .then((result) => {
        const data = {
          userId: result.userId,
          username: result.username
        };
        res.status(201).json({data : data})
      })
      .catch(() => {
        res.status(400).json({ message: 'failure' });
      });
    })
    .catch(() => {
      res.status(400).json({ message: 'failure' });
    });
    // res.status(200).json({ message: '유저의 정보가 수정되었습니다.' });
  }
};
