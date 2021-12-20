const express = require('express');
const router = express.Router();
const myInforRoute = require('./myInfo');
const userRoute = require('./user');
const todoRoute = require('./todo');
const achievementRoute = require('./achievement');
const callbackRoute = require('./callback') //소셜 로그인 구현 시 callback으로 사용

router.use('/myinfo', myInforRoute);
router.use('/user', userRoute);
router.use('/todo', todoRoute);
router.use('/achievement', achievementRoute);
router.use('/callback', callbackRoute) //소셜 로그인 구현 시 callback으로 사용

module.exports = router;
