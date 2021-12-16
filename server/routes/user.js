const router = require('express').Router();
const controller = require('../controllers/user');

router.post('/login', controller.post) // 로그인
router.post('/logout', controller.post); // 로그아웃
router.post('/signup', controller.post) // 회원가입
router.delete('/:userId', controller.delete); // 회원탈퇴

module.exports = router;
