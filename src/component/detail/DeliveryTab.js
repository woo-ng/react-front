import './DeliveryTab.scss';
import SelectBox from './SelectBox';

function DeliveryTab() {
  return (
    <div id="tab4" class="tab-pane fade" role="tabpanel">
      <div class="innerBox2">
        <p class="innerText2">배송/교환/환불</p>
        <span
          style={{
            color: 'rgb(157, 157, 157)',
            marginRight: '70px',
            fontWeight: '700',
          }}
        >
          반품배송비
        </span>
        <span>
          44,000원 (최초 배송비가 무료인 경우 88,000원 부과)
          <br />
        </span>
        <hr style={{ color: 'rgb(157, 157, 157)' }} />

        <span
          style={{
            color: 'rgb(157, 157, 157)',
            marginRight: '70px',
            fontWeight: '700',
          }}
        >
          교환배송비
        </span>
        <span>
          44,000원
          <br />
        </span>
        <hr style={{ color: 'rgb(157, 157, 157)' }} />

        <span
          style={{
            color: 'rgb(157, 157, 157)',
            marginRight: '78px',
            fontWeight: '700',
          }}
        >
          보내실 곳
        </span>
        <span>
          (06236) 서울 강남구 역삼동 123-45 코딩스퀘어 10층 코딩아지트
        </span>
        <hr style={{ color: 'rgb(157, 157, 157)' }} />

        <p class="innerText2">반품/교환 사유에 따른 요청 가능 기간</p>
        <p style={{ color: 'rgb(157, 157, 157)', fontWeight: '700' }}>
          반품 시 먼저 판매자와 연락하셔서 반품사유, 택배사, 배송비, 반품지 주소
          등을 협의하신 후 반품상품을 발송해 주시기 바랍니다.
        </p>
        <span style={{ fontWeight: '900', marginRight: '4px' }}>1. </span>
        <span>구매자 단순 변심은 상품 수령 후 7일 이내</span>
        <span
          style={{
            marginLeft: '5px',
            fontSize: '12px',
            color: 'rgb(157, 157, 157)',
          }}
        >
          (구매자 반품배송비 부담)
          <br />
        </span>
        <span style={{ fontWeight: '900', marginRight: '4px' }}>2. </span>
        <span>
          표시/광고와 상이, 상품하자의 경우 상품 수령 후 3개월 이내 혹은
          표시/광고와 다른 사실을 안 날로부터 30일 이내. 둘 중 하나 경과 시
          반품/교환 불가
        </span>
        <span
          style={{
            marginLeft: '5px',
            fontSize: '12px',
            color: 'rgb(157, 157, 157)',
          }}
        >
          (판매자 반품배송비 부담)
          <br />
        </span>
        <p class="innerText2">반품/교환 불가능 사유</p>
        <span style={{ fontWeight: '900', marginRight: '4px' }}>1. </span>
        <span>
          반품요청기간이 지난 경우
          <br />
        </span>
        <span style={{ fontWeight: '900', marginRight: '4px' }}>2. </span>
        <span>
          구매자의 책임 있는 사유로 상품 등이 멸실 또는 훼손된 경우
          <span
            style={{
              marginLeft: '5px',
              fontSize: '12px',
              color: 'rgb(157, 157, 157)',
            }}
          >
            (단, 상품의 내용을 확인하기 위하여 포장 등을 훼손한 경우는 제외)
          </span>
          <br />
        </span>
        <span style={{ fontWeight: '900', marginRight: '4px' }}>3. </span>
        <span>
          포장을 개봉하였으나 포장이 훼손되어 상품가치가 현저히 상실된 경우
          <span
            style={{
              marginLeft: '5px',
              fontSize: '12px',
              color: 'rgb(157, 157, 157)',
            }}
          >
            (예: 식품, 화장품)
          </span>
          <br />
        </span>
        <span style={{ fontWeight: '900', marginRight: '4px' }}>4. </span>
        <span>
          구매자의 사용 또는 일부 소비에 의하여 상품의 가치가 현저히 감소한 경우
          <span
            style={{
              marginLeft: '5px',
              fontSize: '12px',
              color: 'rgb(157, 157, 157)',
            }}
          >
            (라벨이 떨어진 의류 또는 태그가 떨어진 명품관 상품인 경우)
          </span>
          <br />
        </span>
        <span style={{ fontWeight: '900', marginRight: '4px' }}>5. </span>
        <span>
          시간의 경과에 의하여 재판매가 곤란할 정도로 상품 등의 가치가 현저히
          감소한 경우
          <span
            style={{
              marginLeft: '5px',
              fontSize: '12px',
              color: 'rgb(157, 157, 157)',
            }}
          >
            (예: 식품, 화장품)
          </span>
          <br />
        </span>
        <span style={{ fontWeight: '900', marginRight: '4px' }}>6. </span>
        <span>
          고객주문 확인 후 상품제작에 들어가는 주문제작상품
          <br />
        </span>
        <span style={{ fontWeight: '900', marginRight: '4px' }}>7. </span>
        <span>
          복제가 가능한 상품 등의 포장을 훼손한 경우
          <span
            style={{
              marginLeft: '5px',
              fontSize: '12px',
              color: 'rgb(157, 157, 157)',
            }}
          >
            (CD/DVD/GAME/도서의 경우 포장 개봉 시)
          </span>
          <br />
        </span>
      </div>
    </div>
  );
}

export default DeliveryTab;
