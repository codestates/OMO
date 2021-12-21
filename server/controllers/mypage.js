const { user: UserModel } = require('../models');

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
        userId: result.userId,
        username: result.username,
        socialLogin: result.socialLogin,
        createdAt: `${result.createdAt.getFullYear()}-${result.createdAt.getMonth() + 1}-${result.createdAt.getDate()}`
      };
      res.status(200).json({ data: userInfo });
    })
      .catch((error) => {
        res.status(404).json({ message: 'failure' });
      });
    // res.status(200).json({ message: '유저의 정보가 조회되었습니다.' });
  },
  put: async (req, res) => { // db response 완료 => put 변경
    const userId = parseInt(req.params.userId, 10);
    const cookie = req.cookies.jwt;
    const afterUserInfo = req.body.data.afterUserInfo;
    if (Number.isNaN(userId)) return res.status(400).json({ message: 'failure' });
    if (!cookie) return res.status(401).json({ message: '로그인 유저가 아닙니다.' });
    const userInfo = jwt.verify(cookie, process.env.ACCESS_SECRET);
    const findUser = await UserModel.findOne({
      where: {
        name: userInfo.name,
        password: userInfo.password
      }
    });
    if (!findUser) return res.status(401).json({ message: 'failure' });
    else {
      const afterChange = await UserModel.update({ username: afterUserInfo.username, password: afterUserInfo.password }, {
        where: {
          id: userId
        }
      });
      if (afterChange[0] === 1) {
        UserModel.findOne({
          where: {
            id: userId
          }
        })
          .then((result) => {
            const data = {
              userId: result.userId,
              username: result.username,
              socialLogin: result.socialLogin,
              createdAt: `${result.createdAt.getFullYear()}-${result.createdAt.getMonth() + 1}-${result.createdAt.getDate()}`
            };
            res.status(201).json({ data: data });
          })
          .catch(() => {
            res.status(400).json({ message: 'failure' });
          });
      } else {
        res.status(400).json({ message: 'failure' });
      }
    }
  }
};
