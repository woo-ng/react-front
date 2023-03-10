import './MoreView.scss';

function MoreView() {
  return (
    // 더보기 bar
    <div id="wrap" role="tablist">
      <div class="tab_menu">
        <ul class="list nav-tabs">
          <li>
            <a
              class="btn tabBtn active"
              data-bs-toggle="tab"
              href="#tab1"
              role="tab"
              aria-controls="tab1"
              aria-selected="true"
            >
              상품정보
            </a>
          </li>
          <li>
            <a
              class="btn tabBtn"
              data-bs-toggle="tab"
              href="#tab2"
              role="tab"
              aria-controls="tab2"
              aria-selected="false"
            >
              리뷰
            </a>
          </li>
          <li>
            <a
              class="btn tabBtn"
              data-bs-toggle="tab"
              href="#tab3"
              role="tab"
              aria-controls="tab3"
              aria-selected="false"
            >
              문의
            </a>
          </li>
          <li>
            <a
              class="btn tabBtn"
              data-bs-toggle="tab"
              href="#tab4"
              role="tab"
              aria-controls="tab4"
              aria-selected="false"
            >
              배송/환불
            </a>
          </li>
          <li>
            <a
              class="btn tabBtn"
              data-bs-toggle="tab"
              href="#tab5"
              role="tab"
              aria-controls="tab5"
              aria-selected="false"
            >
              추천
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MoreView;
