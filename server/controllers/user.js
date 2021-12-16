module.exports = {
  // router.post('/logout', controller.post); // 로그아웃
  // router.delete('/:userId', controller.delete); // 회원탈퇴
  post: (req, res) => {
    res.status(200).send({ message: '로그아웃 잘 되었습니다.' });
  },
  delete: (req, res) => {
    res.status(200).send({ message: '유저가 탈퇴되었습니다.' });
  }
};
