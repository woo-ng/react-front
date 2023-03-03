import { useState } from 'react';
import './Login.scss';
import { ReactComponent as Logo } from '../../logo.svg';

function Login() {
  const [memberId, setMemberId] = useState('');
  const [memberPw, setMemberPw] = useState('');
  const [loginResult, setLoginResult] = useState(null);

  function handleLogin() {
    fetch('/member/login.do', {
      method: 'POST',
      body: JSON.stringify({ member_id: memberId, member_pw: memberPw }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          setLoginResult('사용자 ID 또는 비밀번호를 잘못 입력하셨습니다.');
        }
      })
      .then((data) => {
        sessionStorage.setItem('userData', JSON.stringify(data));
        window.location.href = '/main';
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <>
      <a href="/">
        <Logo className="logo_svg" height="43" />
      </a>
      <div className="wrapper">
        <div className="wrap">
          <form>
            <div className="logo_wrap">
              <span>Book Mall</span>
            </div>
            <div className="login_wrap">
              <div className="id_wrap">
                <div className="id_input_box">
                  <input
                    className="id_input"
                    type="text"
                    name="memberId"
                    value={memberId}
                    onChange={(event) => setMemberId(event.target.value)}
                  />
                </div>
              </div>
              <div className="pw_wrap">
                <div className="pw_input_box">
                  <input
                    className="pw_input"
                    type="password"
                    name="memberPw"
                    value={memberPw}
                    onChange={(event) => setMemberPw(event.target.value)}
                  />
                </div>
              </div>
              {loginResult && <div className="login_warn">{loginResult}</div>}
              <div className="login_button_wrap">
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
