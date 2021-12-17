const jwt = require('jsonwebtoken');
const sequelize = require('sequelize');

module.exports = {
  login: (req, res) => {
    const name = req.body.name;
    const password = req.body.password;
    // 로그인 시 유저가 입력하는 정보를 req.body에서 찾는다

    // 입력이 안된 부분에 대한 res
    if (!name || !password) return res.status(400).json({ message: 'failure' });
    const findUser = UserModel.findOne({
      where: {
        name: name,
        password: password
      }
    });
    // 입력값과 일치한 유저가 없을 경우
    if (!findUser) return res.status(401).json({ message: 'failure' });
    else {
      // 해당하는 유저가 있을 경우 token이랑 같이 전송
      const data = {
        name: name,
        password: password
      };
      const accessToken = jwt.sign(data, process.env.ACCESS_SECRET, { expiresIn: '1d' });
      res.cookie('jwt', accessToken).status(200).json({ message: 'ok' });
    }
    // res.status(200).json({ message : '로그인 되었습니다.'})
  },
  logout: (req, res) => {
    const cookie = req.cookies.jwt;
    if (!cookie) return res.status(401).json({ message: '로그인 유저가 아닙니다.' });
    const userInfo = jwt.verify(cookie, process.env.ACCESS_SECRET);
    const findUser = UserModel.findOne({
      where: {
        name: userInfo.name,
        password: userInfo.password
      }
    });
    if (!findUser) return res.status(401).json({ message: 'failure' });
    else {
      // 로그아웃 요청이 오면은 clearCookie를 통해서 jwt라는 이름의 cookie를 삭제
      res.clearCookie('jwt').status(200).json({ message: '로그아웃 잘 되었습니다.' });
    }
    // res.status(200).json({ message : '로그아웃 되었습니다.'})
  },
  signup: (req, res) => {
    const userInfo = req.body.data;
    const user = UserModel.create(userInfo);
    if (!user) return res.status(401).json({ message: 'failure' });
    else {
      res.status(200).json({ message: 'success' });
    }
    // res.status(200).json({message : '회원가입 되었습니다'})
  },
  delete: (req, res) => {
    // res.status(200).json({ message: '유저가 탈퇴되었습니다.' });
  }
};
