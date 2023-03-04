import React, { useEffect } from 'react';
import './Selling.scss';

function setupTimer() {
  let time = 500; // 기준시간 작성
  let hour = ''; // 시간
  let min = ''; // 분
  let sec = ''; // 초

  // setInterval(함수, 시간) : 주기적인 실행
  let x = setInterval(function () {
    // parseInt() : 정수를 반환
    hour = parseInt(time / 24);
    min = parseInt(time / 60); // 몫을 계산
    sec = time % 60; // 나머지를 계산

    document.getElementById('timer').innerText =
      '오늘의딜 ' + hour + ':' + min + ':' + sec + ' 남음' + ' ≫';
    time--;

    // 타임아웃 시
    if (time < 0) {
      clearInterval(x);
      document.getElementById('timer').innerText = '시간초과';
    }
  }, 1000);
  return () => clearInterval(x);
}

function Selling() {
  useEffect(setupTimer, []);
  return (
    <main class="selling">
      <div class="product position-relative">
        <img
          class="productPicture"
          src="https://image.ohou.se/i/bucketplace-v2-development/uploads/deals/165967449183605425.jpg?gif=1&w=850&h=850&c=c&webp=1"
        />
        <div id="timer"></div>
      </div>

      <div class="all">
        <div>
          <p class="companyName">업체명</p>
          <p class="title">[할인율 어쩌고] 구매 안 하면 바보 멍청이</p>
          <p class="starReview">
            <span class="star">★★★★★</span>
            <span class="review">533개 리뷰</span>
          </p>
          <p class="gradeFirst">
            <span class="grade">25%</span>
            <span class="firstPrice">1,200,000원</span>
          </p>
          <p class="priceWon">
            <span class="price"> 899,000 </span>
            <span class="won">원</span>
          </p>
          <span class="benefit">혜택</span>
          <span class="contents">
            <span class="point">899P</span>
            <span class="saving">적립 (WELCOME 2% 적립)</span>
            <p class="benefit2">
              최대 5% 카드 즉시할인 (삼성, 우리, 신한, 현대, 롯데, NH농협, 하나)
            </p>
            <p class="benefit3">월 어쩌고원 (n개월) 무이자할부</p>
          </span>
          <div class="deliBox">
            <span class="delivery">배송</span>
            <span class="free">무료배송</span>
            <p class="selfDelivery">업체직접배송</p>
          </div>

          <div class="contents2">
            <span class="date">2/23(목)</span>
            <span class="arrive"> 이내 도착 예정</span>
          </div>

          <span class="companyName2">업체명</span>
          <button id="brandBtn">브랜드홈 &gt;</button>
          <div id="item-option">
            <div>
              <select id="user-option" onchange="handleOnChange(this)">
                <option value="">옵션을 선택해주세요.</option>
                <option value="option1">option1</option>
                <option value="option2">option2</option>
                <option value="option3">option3</option>
                <option value="option4">option4</option>
                <option value="option5">option5</option>
              </select>
              <div id="optionContainer"></div>
              <template id="optionTemplate">
                <div class="optionLayer">
                  <p class="optionItem"></p>
                  <button id="removeBtn">X</button>
                  <select id="amount">
                    <option value="">수량</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                  <span class="money3">0원</span>
                </div>
              </template>
            </div>
          </div>
          <div class="moneyBox">
            <span class="money">주문금액</span>
            <span class="money2">0원</span>
          </div>
          <p />
          <div class="cartPur">
            <button id="cart">장바구니</button>
            <button id="purchase">바로구매</button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Selling;
