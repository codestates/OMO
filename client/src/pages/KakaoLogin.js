import { useHistory } from 'react-router-dom';
import axios from 'axios';
import './Token';
import Token from './Token';
import './Mainpage';

const clientId = process.env.REACT_APP_KAKAO_CLIENT_ID;

export default function KakaoLogin () {
  const history = useHistory();
  const code = new URL(window.location.href).searchParams.get("code");

    if(code !== null) {
      axios
        .post(
          `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${clientId}&redirect_uri=http://localhost:3000/kakaoLogin&code=${code}`,
          {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
          }
        )
        .then((res) => {
          console.log(res)
          
          //Kakao.Auth.setAccessToken(ACCESS_TOKEN);

          // history.push('/mainpage');
          //return <Mainpage accessToken={res.access_token}/>
        })
        .catch((err) => {
          console.log("카카오 로그인 에러", err);
        })
    } 
    // .then((res) => {
    //     res.userInfo
    //     return <App userInfo={} />
    // })

};
