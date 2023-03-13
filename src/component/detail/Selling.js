import React, { useEffect } from 'react';
import './Selling.scss';
import axios from 'axios';
import MoreView from './MoreView';
import BodyPage from './BodyPage';
import ReviewPage from './ReviewPage';
import DeliveryTab from './DeliveryTab';
import QuestionTab from './QuestionTab';
import RecommendTab from './RecommendTab';
import $ from 'jquery';
import Header from '../header/Header';
import Timer from '../Timer';
import { useQuery } from 'react-query';
import Category from './Category';
import SellingOptions from './SellingOptions';

const fetchProduct = async () => {
  const { data } = await axios.get('http://localhost:3000/selling.json');
  return data;
};

function init() {
  const btns = document.querySelectorAll('#cart');

  for (let btn of btns) {
    btn.addEventListener('click', handleCartBtn);
  }

  function handleCartBtn(event) {
    event.preventDefault(); // 버튼 클릭시 페이지 제일 상단으로 올라가는 것 방지
    alert('장바구니에 추가되었습니다.');
  }
}

function Selling() {
  const { data, isLoading, error } = useQuery('product', fetchProduct);
  useEffect(init, []);
  console.log(data);
  const discountedPrice = data?.goods_price * (1 - data?.goods_discount);
  const formattedPrice = discountedPrice?.toLocaleString();

  return (
    <>
      <Header />
      <nav class="ani-navbar">
        <p class="arrow">▶</p>
        <div id="menu">
          <Category />
        </div>
      </nav>
      <main class="selling">
        <div class="product position-relative">
          <img
            class="productPicture"
            src="https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/166415776944888839.jpg?gif=1&w=640&h=640&c=c&webp=1"
          />
          <Timer id="timer" />
        </div>

        <div class="all">
          <div>
            <p class="companyName">{data?.maker_name}</p>
            <p class="title">{data?.goods_name}</p>
            <p class="starReview">
              <span class="star">★★★★★</span>
              <span class="review">1개 리뷰</span>
            </p>
            <p class="gradeFirst">
              <span class="grade">{data?.goods_discount * 100}%</span>
              <span class="firstPrice">
                {data?.goods_price.toLocaleString()}
              </span>
            </p>
            <p class="priceWon">
              <span class="price">{formattedPrice}</span>
              <span class="won">원</span>
            </p>
            <span class="benefit">혜택</span>
            <span class="contents">
              <span class="point">899P</span>
              <span class="saving">적립 (WELCOME 1% 적립)</span>
              <p class="benefit2">
                최대 5% 카드 즉시할인 (삼성, 우리, 신한, 현대, 롯데, NH농협,
                하나)
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

            <span class="companyName2">{data?.maker_name}</span>
            <button
              id="brandBtn"
              onClick={() =>
                (window.location.href = 'https://www.apple.com/kr/')
              }
            >
              브랜드홈 &gt;
            </button>
            <SellingOptions price={discountedPrice} />
            <p />
            <div class="cartPur">
              <button
                id="cart"
                onClick={() =>
                  (window.location.href = 'http://localhost:8080/cart/test2')
                }
              >
                장바구니
              </button>
              <button id="purchase">바로구매</button>
            </div>
          </div>
        </div>
        <MoreView />
        <div class="cont_area tab-content">
          <BodyPage />
          <ReviewPage />
          <QuestionTab />
          <DeliveryTab />
          <RecommendTab />
        </div>
      </main>
    </>
  );
}

export default Selling;
