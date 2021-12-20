const router = require('express').Router();
const controller = require('../controllers/mypage');

router.get('/:userId', controller.get); // 회원 정보 조회
router.put('/:userId', controller.put); // 회원 정보 수정

module.exports = router;
