const express = require('express');
const router = express.Router();
const mypageRoute = require('./mypage');
const userRoute = require('./user');
const todoRoute = require('./todo');
const achievementRoute = require('./achievement');
const quoteRouter = require('./quote');
const callbackRoute = require('./callback'); // 소셜 로그인 구현 시 callback으로 사용

router.use('/mypage', mypageRoute);
router.use('/user', userRoute);
router.use('/todo', todoRoute);
router.use('/achievement', achievementRoute);
router.use('/quote', quoteRouter);
router.use('/callback', callbackRoute); // 소셜 로그인 구현 시 callback으로 사용

module.exports = router;
