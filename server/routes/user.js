const router = require('express').Router();
const controller = require('../controllers/user');

router.post('/login', controller.login); // 로그인
router.post('/logout', controller.logout); // 로그아웃
router.post('/signup', controller.signup); // 회원가입
router.delete('/:userId', controller.delete); // 회원탈퇴

module.exports = router;
