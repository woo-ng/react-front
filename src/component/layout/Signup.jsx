import axios from 'axios';
import React, { useRef, useState } from 'react';
import Postcode from '../Postcode';
import { ReactComponent as Logo } from '../../logo.svg';

import './Signup.scss';

const { REACT_APP_API_URL } = process.env;

const Signup = () => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [errors, setErrors] = useState({});
  const [isCodeSent, setIsCodeSent] = useState(false);
  const verificationRef = useRef(null);
  const [memberAddr1, setAddress1] = useState('');
  const [memberAddr2, setAddress2] = useState('');
  const [memberAddr3, setAddress3] = useState('');

  const [popup, setPopup] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validate({ email, password, confirmPassword });
    setErrors(errors);
    if (Object.keys(errors).length === 0) {
      if (isCodeSent) {
        const errors = validateCode();
        setErrors({ ...errors });
        if (Object.keys(errors).length === 0) {
          verifyCode(verificationRef.current.value);
        }
      } else {
        try {
          await sendVerificationCode(email);
          setIsCodeSent(true);
        } catch (error) {
          console.error(error);
          setErrors({
            submit: '이메일 주소 검증 코드를 전송하는 데 실패했습니다.',
          });
        }
      }
    }
  };

  const sendVerificationCode = async (email) => {
    const response = await axios.post(`${REACT_APP_API_URL}/member/mailCheck`, {
      email,
    });
    if (response.status != 200) {
      throw new Error('이메일 주소 검증 코드를 전송하는 데 실패했습니다.');
    }
    setVerificationCode(String(response.data));
  };

  const register = async () => {
    const response = await axios.post(`${REACT_APP_API_URL}/member/join`, {
      member_id: id,
      member_pw: password,
      member_mail: email,
      member_name: name,
      member_addr1: memberAddr1,
      member_addr2: memberAddr2,
      member_addr3: memberAddr3,
    });
    if (response.status != 200) {
      throw new Error('실패했습니다.');
    } else {
      window.location.href = '/sign_in'; // redirect to sign-in page
    }
    setVerificationCode(String(response.data));
  };

  const handleCodeChange = () => {
    setErrors({});
  };

  const verifyCode = (code) => {
    console.log('verifyCode', code);
    if (code == verificationCode) {
      register();
    } else {
      alert('유효하지 않은 검증 코드입니다.');
    }
  };

  const validate = () => {
    const errors = {};
    if (email.trim() === '') {
      errors.email = '이메일 주소를 입력해주세요.';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = '유효하지 않은 이메일 주소입니다.';
    }
    if (password.trim() === '') {
      errors.password = '비밀번호를 입력해주세요.';
    } else if (password.length < 4) {
      errors.password = '비밀번호는 4자 이상이어야 합니다.';
    }
    if (confirmPassword.trim() === '') {
      errors.confirmPassword = '비밀번호 확인을 입력해주세요.';
    } else if (password !== confirmPassword) {
      errors.confirmPassword = '비밀번호와 비밀번호 확인이 일치하지 않습니다.';
    }
    return errors;
  };

  const validateCode = () => {
    const errors = {};
    if (verificationCode.trim() === '') {
      errors.verificationCode = '검증 코드를 입력해주세요.';
    }
    return errors;
  };

  return (
    <>
      <a href="/">
        <Logo />
      </a>
      <div id="sign-up">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="id">아이디:</label>
            <input
              type="text"
              name="id"
              value={id}
              placeholder="아이디"
              onChange={(e) => setId(e.target.value)}
            />
            {errors.id && <span>{errors.id}</span>}
          </div>

          {/* 비밀번호 입력 부분 */}
          <div>
            <label htmlFor="password">비밀번호:</label>
            <input
              type="password"
              name="password"
              placeholder="비밀번호"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <span>{errors.password}</span>}
          </div>
          <div>
            <label htmlFor="confirmPassword">비밀번호 확인:</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="비밀번호 확인"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
          </div>
          <div>
            <label htmlFor="name">이름:</label>
            <input
              type="text"
              name="name"
              placeholder="이름"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <span>{errors.name}</span>}
          </div>
          <div>
            <input
              type="button"
              onclick="sample4_execDaumPostcode()"
              value="우편번호 찾기"
              onClick={() => {
                setPopup(!popup);
              }}
            />

            {popup && (
              <Postcode
                onCompletePost={(data) => {
                  setAddress1(data.zonecode);
                  setAddress2(data.address);
                }}
              />
            )}
            {errors.memberAddr1 && <span>{errors.memberAddr1}</span>}
          </div>
          <input
            type="text"
            name="memberAddr1"
            placeholder="우편번호"
            value={memberAddr1}
          />
          <input
            type="text"
            name="memberAddr2"
            placeholder="도로명주소"
            value={memberAddr2}
          />
          <input
            type="text"
            name="memberAddr3"
            value={memberAddr3}
            onChange={(e) => setAddress3(e.target.value)}
            placeholder="상세주소"
          />
          <div>
            <label htmlFor="email">이메일 주소:</label>
            <input
              type="email"
              name="email"
              placeholder="이메일"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <span>{errors.email}</span>}
          </div>
          {isCodeSent ? (
            <>
              <div>
                <label htmlFor="verificationCode">검증 코드:</label>
                <input
                  type="text"
                  key="code"
                  ref={verificationRef}
                  onChange={handleCodeChange}
                />
                {errors.verificationCode && (
                  <span>{errors.verificationCode}</span>
                )}
              </div>
              <button type="submit">검증 코드 확인</button>
            </>
          ) : (
            <button type="submit">회원가입 하기</button>
          )}
        </form>
      </div>
    </>
  );
};
export default Signup;
