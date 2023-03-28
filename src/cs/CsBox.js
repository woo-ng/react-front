import React from 'react';
import './CsBox.css';

class CsBox extends React.Component {
  componentDidMount() {
    window.addEventListener('hashchange', this.hashChanged, false);
  }

  componentWillUnmount() {
    window.removeEventListener('hashchange', this.hashChanged, false);
  }

  getHash(url) {
    let hash = url.split('#')[1];
    return hash.split('__');
  }

  hashChanged = (e) => {
    let [tab, question] = this.getHash(e.newURL);
    this.props.handleHash(tab, question);
  };

  handleClick = (e) => {
    let [tab, question] = this.getHash(e.target.getAttribute('href'));
    this.props.handleHash(tab, question);
  };

  render = () => (
    <>
      <div className="HelpBox">
        <h2>무엇을 도와드릴까요?</h2> <br />
        <span class="faq-mark">Q</span>
        <span className="faq-text">
          <a
            onClick={this.handleClick}
            href="/customer_center#category2__deliveryFee"
          >
            배송비는 얼마인가요?
          </a>
        </span>
        <br />
        <span class="faq-mark">Q</span>
        <span className="faq-text">
          <a
            onClick={this.handleClick}
            href="/customer_center#category3__orderCancel"
          >
            주문 취소는 어떻게 하나요?
          </a>
        </span>
        <br />
        <span class="faq-mark">Q</span>
        <span className="faq-text">
          <a
            onClick={this.handleClick}
            href="/customer_center#category7__productDetail"
          >
            제품의 자세한 정보를 알고 싶어요
          </a>
        </span>
        <br />
        <span class="faq-mark">Q</span>
        <span className="faq-text">
          <a
            onClick={this.handleClick}
            href="/customer_center#category4__defectiveProduct"
          >
            제품이 불량일때는?
          </a>
        </span>
        <br />
        <span class="faq-mark">Q</span>
        <span className="faq-text">
          <a href="/customer_center#category6__alreadySigned">
            카카오 계정으로 로그인하면 이미 가입되었다고 합니다
          </a>
        </span>
      </div>

      <div className="CsBox">
        <div id="CsTitle">
          <h2 id="CsCenter">고객센터</h2>
          <h2 id="CsTime">09:00 ~ 18:00</h2>
          <h3>
            · 평일 : 전체 문의 상담 가능
            <br />
            · 주말/공휴일 : 우리의 집 직접배송 및 이사/시공/수리 문의에 한해
            전화상담 가능
            <br />
            1234-5678
            <br />
          </h3>
        </div>

        <div>
          <button id="onetoone" onClick={() => window.location.href = "/bbs/main"}>1 : 1 문의하기</button>
          <br />
        </div>
      </div>
    </>
  );
}

export default CsBox;
