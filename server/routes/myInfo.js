const router = require('express').Router();
const controller = require('../controllers/myInfo');

// 아침에 오면 회원정보 수정 patch, 조회 get  기능 구현하기
router.get('/:userId', controller.get); // 회원 정보 조회
router.patch('/:userId', controller.patch); // 회원 정보 수정

module.exports = router;
