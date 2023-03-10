import './ReviewPage.scss';
import SelectBox from './SelectBox';

function ReviewPage() {
  return (
    <div id="tab2" class="tab-pane fade" role="tabpanel">
      <div class="reviewBar">
        <div class="reviewText">
          <span class="review2">리뷰</span>
          <span class="reviewNum">2개</span>
          <div class="reviewWrite">
            <a href="#" id="reviewWrite">
              리뷰쓰기
            </a>
          </div>
        </div>

        <div class="reviewBox">
          <div class="reviewBox2">
            <span class="starReview2">★★★★★</span>
            <span class="reviewPoint">5.0</span>
            <div class="proSize">
              <div class="progress">
                <div
                  class="progress-bar bg-danger col-12"
                  role="progressbar"
                  aria-valuenow="100"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  5점
                </div>
              </div>

              <div class="progress">
                <div
                  class="progress-bar bg-danger col-9"
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  4점
                </div>
              </div>

              <div class="progress">
                <div
                  class="progress-bar bg-danger col-6"
                  role="progressbar"
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  3점
                </div>
              </div>

              <div class="progress">
                <div
                  class="progress-bar bg-danger col-3"
                  role="progressbar"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  2점
                </div>
              </div>

              <div class="progress">
                <div
                  class="progress-bar bg-danger"
                  role="progressbar"
                  aria-valuenow="0"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  1점
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="selectBar">
          <ul class="selectUl">
            <li>
              <a href="#">베스트순</a>
            </li>
            <li>
              <a href="#">최신순</a>
            </li>
            <li>
              <a href="#">사진 리뷰</a>
            </li>
          </ul>
          <SelectBox label="별점">
            <li class="starList">5점</li>
            <li class="starList">4점</li>
            <li class="starList">3점</li>
            <li class="starList">2점</li>
            <li class="starList">1점</li>
          </SelectBox>
          <SelectBox label="옵션">
            <li class="optionList">option1</li>
            <li class="optionList">option2</li>
            <li class="optionList">option3</li>
            <li class="optionList">option4</li>
            <li class="optionList">option5</li>
          </SelectBox>
        </div>

        <div class="container2">
          <div class="left1">
            <img src="/img/lion.png" class="imageRound" />
            <p class="nick">사용자1</p>
            <span class="writeTime"> 1시간 전 </span>
            <span class="reviewDate"> 2023.03.10 </span>
            <div class="writeBox">
              <p id="writeTitle">배송 빨라요.</p>
              <p id="starPoint2">★★★★★</p>
              <span id="writeContent"> 아이폰 구매 대만족! </span>
            </div>
          </div>
          <img src="/img/ip5.jpg" class="iphone" />
        </div>
      </div>
    </div>
  );
}

export default ReviewPage;
