// const axios = require('axios');
// const sequelize = require('sequelize');

// module.exports = {
//   callback: (req, res) => {
//     const authorizationCode = req.body.code;

//     res.status(200).json({ message: 'ok' });
//   }
// };

// /* axios.get(
//     `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&code&client_id=${process.env.KAKAO_CLIENT_ID}?redirect_uri=${process.env.KAKAO_REDIRECT_URI}?code=${authorizationCode}`
// )
// .then((kakaoData) => {
//     axios.get('https:/kapi.kakao.com/v2/user/me', {
//         Headers: {
//             Authorization: 'Bearer' + kakaoData.access_token,
//             'Content-Type': 'application/json'
//         }
//     })
// })
// .then((res) => {
//     console.log(res)
// })
// .catch((err) => {
//     console.log("카카오 로그인 에러", err);
// }) */
