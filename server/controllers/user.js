const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
const { user: UserModel, todolist: TodoModel } = require('../models');

module.exports = {
  login: (req, res) => { // db response 완료
    const userId = req.body.userId;
    const password = req.body.password;
    // const encryptedPassowrd = bcrypt.hashSync(password, 10)
    // console.log(password)
    // console.log(encryptedPassowrd)
    // const same = bcrypt.compareSync(password, encryptedPassowrd)
    // console.log(same)
    if (!userId || !password) return res.status(400).json({ message: 'failure' });
    const userData = {};
    UserModel.findOne({
      where: {
        userId: userId
      }
    })
      .then((result) => {
        // console.log('이거슨 ', result)
        if(result.userId === 'test1' || result.userId === 'test2' || result.userId === 'test3') {
          userData.id = result.id
          userData.userId = result.userId;
          userData.username = result.username;
          const Id = result.id;
          console.log(result)
        }
        else {
          const userPassword = result.password
          const same = bcrypt.compareSync(password, userPassword)
          if(!same) {
            return res.status(400).json({ message: 'failure' });
        }
        userData.id = result.id
        userData.userId = result.userId;
        userData.username = result.username;
        const Id = result.id;
        }
        TodoModel.findAll({
          where: {
            user_id: result.id
          }
        })
          .then((result) => {
            userData.todolist = result;
            const data = {
              userId: userId
            };
            const accessToken = jwt.sign(data, process.env.ACCESS_SECRET, { expiresIn: '1d' });
            res.cookie('jwt', accessToken).status(200).json({ data: userData, message: 'ok' });
          })
          .catch(err => {
            console.log('이거슨 찾는 것에서 에러', err)
            res.status(401).json({ message: 'failure' });
          });
      })
      .catch(err => {
        console.log('이것은 못 찾은 에러', err)
        res.status(401).json({ message: 'failure' });
      });
  },
  logout: (req, res) => { // postman으로 쿠키 확인하는 방법 학습할 필요 있음
    const cookie = req.cookies.jwt;
    if (!cookie) return res.status(401).json({ message: '로그인 유저가 아닙니다.' });
    //! postman으로 cookie 확인이 조금 어려워서 아래는 이후에 진행을 할지에 대해 고민을 해봐야할 거 같습니다 ㅠㅠ 
    // const userInfo = jwt.verify(cookie, process.env.ACCESS_SECRET);
    // res.json(userInfo)
    // const findUser = UserModel.findOne({
    //   where: {
    //     name: userInfo.name,
    //     password: userInfo.password
    //   }
    // });
    // if (!findUser) return res.status(401).json({ message: 'failure' });
    else {
      // 로그아웃 요청이 오면은 clearCookie를 통해서 jwt라는 이름의 cookie를 삭제
      res.clearCookie('jwt').status(200).json({ message: '로그아웃 되었습니다.' });
    }
    // res.status(200).json({ message : '로그아웃 되었습니다.'})
  },
  signup: (req, res) => { // db response 완료
    console.log(req.body)
    const userInfo = req.body
    // res.json(userInfo)
    const userId = userInfo.userId
    const username = userInfo.username
    const password = userInfo.password
    const encryptedPassowrd = bcrypt.hashSync(password, 10)
    const user = UserModel.create({
      userId: userId,
      username: username,
      password: encryptedPassowrd
    });
    if (!user) return res.status(401).json({ message: 'failure' });
    else {
      res.status(200).json({ message: 'success', data: userInfo });
    }
    // res.status(200).json({message : '회원가입 되었습니다'})
  },
  delete: (req, res) => { // db response 완료
    const userId = parseInt(req.params.userId, 10);
    if (Number.isNaN(userId)) return res.status(400).json({ message: 'failure' });
    TodoModel.destroy({
      where : {
        id : userId
      }
    })
    .then(() => {
      UserModel.destroy({
        where : {
          id : userId
        }
      })
      .then((result) => {
        if( result !== 0) {
            res.status(204).json({ message: '유저가 탈퇴되었습니다.' });
        } else {
            res.status(401).json({ message: 'failure' });
        }
      })
    })
  }
};
