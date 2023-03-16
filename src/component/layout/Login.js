import axios from 'axios';
import { useState } from 'react';
import { ReactComponent as Logo } from '../../logo.svg';
import './Login.scss';

const { REACT_APP_API_URL } = process.env;

function Login() {
  const [memberId, setMemberId] = useState('');
  const [memberPw, setMemberPw] = useState('');
  const [loginResult, setLoginResult] = useState(null);

  function handleLogin() {
    axios
      .post(`${REACT_APP_API_URL}/member/login.do`, {
        member_id: memberId,
        member_pw: memberPw,
      })
      .then((response) => {
        sessionStorage.setItem('userData', JSON.stringify(response.data));
        window.location.href = '/';
      })
      .catch((error) => {
        console.error(error);
        let {
          message,
          response: { status },
        } = error;
        if (status === 404)
          message = '사용자 ID 또는 비밀번호를 잘못 입력하셨습니다.';
        setLoginResult(message);
      });
  }

  return (
    <>
      <div className="wrapper">
        <div className="wrap">
          <form>
            <div className="logo_wrap">
              <a href="/">
                <Logo />
              </a>
            </div>
            <div className="login_wrap">
              <div className="id_wrap">
                <div className="input-box">
                  <input
                    className="input"
                    type="text"
                    name="memberId"
                    placeholder="아이디"
                    value={memberId}
                    onChange={(event) => setMemberId(event.target.value)}
                  />
                </div>
              </div>
              <div className="pw_wrap">
                <div className="input-box">
                  <input
                    className="input"
                    type="password"
                    name="memberPw"
                    placeholder="비밀번호"
                    value={memberPw}
                    onChange={(event) => setMemberPw(event.target.value)}
                  />
                </div>
              </div>
              {loginResult && <div className="login_warn">{loginResult}</div>}
              <div className="login_button_wrap" onClick={handleLogin}>
                <button
                  type="button"
                  className="login_button"
                  onClick={handleLogin}
                >
                  로그인
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
