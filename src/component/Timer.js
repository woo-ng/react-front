import { useEffect, useRef } from 'react';

function formatTime(seconds) {
  var hours = Math.floor(seconds / 3600);
  var minutes = Math.floor((seconds % 3600) / 60);
  var seconds = Math.floor(seconds % 60);
  return (
    (hours < 10 ? '0' : '') +
    hours +
    ':' +
    (minutes < 10 ? '0' : '') +
    minutes +
    ':' +
    (seconds < 10 ? '0' : '') +
    seconds
  );
}

function Timer(props) {
  const timer = useRef();
  useEffect(() => {
    let time = 85000; // 기준시간 작성

    // setInterval(함수, 시간) : 주기적인 실행
    let x = setInterval(function () {
      timer.current.innerText = formatTime(time) + ' 남음'; //≫
      time--;

      // 타임아웃 시
      if (time < 0) {
        clearInterval(x);
        timer.current.innerText = '시간초과';
      }
    }, 1000);
    return () => clearInterval(x);
  }, []);
  return <div ref={timer} {...props} />;
}

export default Timer;
