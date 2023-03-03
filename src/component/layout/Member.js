import React, { useState } from 'react';
import './Member.scss';

function RegisterForm() {
  const [memberId, setmemberId] = useState('');
  const [memberPw, setmemberPw] = useState('');
  const [confirmmemberPw, setConfirmmemberPw] = useState('');
  const [memberName, setMemberName] = useState('');
  const [memberAddr1, setmemberAddr1] = useState('');
  const [memberAddr2, setmemberAddr2] = useState('');
  const [memberAddr3, setmemberAddr3] = useState('');
  const [memberEmail, setmemberEmail] = useState('');
  const [memberEmailck, setmemberEmailck] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
  
    // 사용자가 입력한 값을 모아 formData 객체를 만듭니다.
    const formData = new FormData();
    formData.append('memberId', memberId);
    formData.append('memberPw', memberPw);
    formData.append('memberName', memberName);
    formData.append('memberAddr1', memberAddr1);
    formData.append('memberAddr2', memberAddr2);
    formData.append('memberAddr3', memberAddr3);
    formData.append('memberEmail', memberEmail);
  
    // fetch API를 사용하여 formData 객체를 서버로 전송합니다.
    fetch('/api/member', {
        method: 'POST',
        body: formData
    }).then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
    }).then(data => {
        console.log(data);
        // 성공적으로 처리된 경우 사용자에게 알리거나 리디렉션합니다.
    }).catch(error => {
        console.error('Error:', error);
        // 오류가 발생한 경우 에러 메시지를 출력하거나 적절한 조치를 취합니다.
    });
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <label>
        회원아이디:
        <input
          type="text"
          value={memberId}
          onChange={event => setmemberId(event.target.value)}
        />
      </label>
      <br />
      <label>
        비밀번호:
        <input
          type="password"
          value={memberPw}
          onChange={event => setmemberPw(event.target.value)}
        />
      </label>
      <br />
      <label>
        비밀번호 확인:
        <input
          type="password"
          value={confirmmemberPw}
          onChange={event => setConfirmmemberPw(event.target.value)}
        />
      </label>
      <br />
      <label>
        회원 성명:
        <input
          type="text"
          value={memberName}
          onChange={event => setMemberName(event.target.value)}
        />
      </label>
      <br />
      <label>
        회원 주소:
        <input
          type="text"
          value={memberAddr1}
          onChange={event => setmemberAddr1(event.target.value)}
        />
        <br />
        <br />
        <button>우편번호 찾기</button>
        <input
          type="text"
          value={memberAddr2}
          onChange={event => setmemberAddr2(event.target.value)}
        />
        <br />
        <input
          type="text"
          value={memberAddr3}
          onChange={event => setmemberAddr3(event.target.value)}
        />
      </label>
      <br />
      <label>
        이메일 주소:
        <input
          type="text"
          value={memberEmail}
          onChange={event => setmemberEmail(event.target.value)}
        />
        <button>인증번호 전송</button>
      </label>
      <br />
      <label>
        이메일 인증번호:
        <input
          type="text"
          value={memberEmailck}
          onChange={event => setmemberEmailck(event.target.value)}
        />
      </label>
      <br />
      <button type="submit">회원가입</button>
    </form>
  );
}

export default RegisterForm;
