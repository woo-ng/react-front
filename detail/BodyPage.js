import './BodyPage.scss';
import $ from 'jquery';
import { useState } from 'react';

function BodyPage() {
  const [isShown, setIsShown] = useState(false);

  const toggleClass = () => {
    setIsShown((prevIsShown) => !prevIsShown);
  };

  return (
    <div id="tab1" class="tab-pane fade show active" role="tabpanel">
      <div class="userTitle">
        <span class="userText">유저들의 스타일링샷</span>
        <span class="userTextNum">3</span>
        <button id="movePicBtn">▼</button>
      </div>
      {/* 캐러셀  */}
      <div class="pictureCar">
        <div
          id="carouselExampleIndicators"
          class="carousel slide w-50"
          data-bs-ride="true"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="/img/ip1.jpg" class="cover d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="/img/ip2.jpg" class="cover d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="/img/ip3.jpg" class="cover d-block w-100" alt="..." />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div class="btnBox">
        <button id="stylingBtn" onClick={toggleClass}>
          본문 전체보기 ▶
        </button>
      </div>

      <div className={`showH ${isShown ? '' : 'd-none'}`}>
        <div class="text1" id="tab1">
          iPhone 14
          <br />
        </div>
        <div class="text2">
          어떤 iPhone이 당신에게 맞을까요?
          <br />
          Big and bigger.
          <br />
          Pro.Beyond.
        </div>
        <div class="card-background">
          <div class="card-box">
            <img src="/img/ip1.jpg" />
          </div>
          <div class="card-box">
            <img src="/img/ip2.jpg" />
          </div>
          <div class="card-box">
            <img src="/img/ip3.jpg" />
          </div>
          <div class="card-box">
            <img src="/img/ip4.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BodyPage;
