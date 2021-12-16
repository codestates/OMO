module.exports = {
// router.get('/:userId', controller.get); // 회원 정보 조회
// {
//     "data": {
//       "id": "21323",
//       "name": "logoses",
//       "totalJob": "100",
//       "notDoneJob": "20",
//       "doneJob": "80"
//     },
//     "message": "ok"
//   }
// router.patch('/:userId', controller.patch); // 회원 정보 수정
// {
//     "data": {
//       "id": "21323",
//       "nickname": "logoses",
//       "email": "holyseo@gmail.com"
//     }
//   }
  get: (req, res) => {
    res.status(200).send({ message: '유저의 정보가 조회되었습니다.' });
  },
  patch: (req, res) => {
    res.status(200).send({ message: '유저의 정보가 수정되었습니다.' });
  }
};
