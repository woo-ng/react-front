import { useState, useEffect } from 'react';
import Header from '../header/Header';

const cartItems = [
  {
    id: 1,
    name: '책 1',
    count: 2,
    price: 10000,
    point: 500,
  },
  {
    id: 2,
    name: '책 2',
    count: 1,
    price: 15000,
    point: 750,
  },
];

function Cart() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [totalKind, setTotalKind] = useState(0);
  const [totalPoint, setTotalPoint] = useState(0);
  const [deliveryPrice, setDeliveryPrice] = useState(0);
  const [finalTotalPrice, setFinalTotalPrice] = useState(0);

  useEffect(() => {
    setTotalInfo();
  }, []);

  const handleCheckboxChange = () => {
    setTotalInfo();
  };

  const handleAllCheckChange = () => {
    const checkboxes = document.querySelectorAll('.individual_cart_checkbox');
    const allCheckInput = document.querySelector('.all_check_input');

    checkboxes.forEach((checkbox) => {
      checkbox.checked = allCheckInput.checked;
    });

    setTotalInfo();
  };

  const setTotalInfo = () => {
    let totalPrice = 0;
    let totalCount = 0;
    let totalKind = 0;
    let totalPoint = 0;
    let deliveryPrice = 0;
    let finalTotalPrice = 0;

    const cartInfoTds = document.querySelectorAll('.cart_info_td');

    cartInfoTds.forEach((element) => {
      if (element.querySelector('.individual_cart_checkbox').checked) {
        totalPrice += parseInt(
          element.querySelector('.individual_totalPrice_input').value
        );
        totalCount += parseInt(
          element.querySelector('.individual_bookCount_input').value
        );
        totalKind += 1;
        totalPoint += parseInt(
          element.querySelector('.individual_totalPoint_input').value
        );
      }
    });

    if (totalPrice >= 30000) {
      deliveryPrice = 0;
    } else if (totalPrice === 0) {
      deliveryPrice = 0;
    } else {
      deliveryPrice = 3000;
    }

    finalTotalPrice = totalPrice + deliveryPrice;

    setTotalPrice(totalPrice);
    setTotalCount(totalCount);
    setTotalKind(totalKind);
    setTotalPoint(totalPoint);
    setDeliveryPrice(deliveryPrice);
    setFinalTotalPrice(finalTotalPrice);
  };

  return (
    <>
      <Header />
      <div>
        {/* 전체 선택 체크박스 */}
        <input
          type="checkbox"
          className="all_check_input"
          onClick={handleAllCheckChange}
        />
        {/* 장바구니 정보 테이블 */}
        <table>
          <thead>
            <tr>
              <th>선택</th>
              <th>상품</th>
              <th>수량</th>
              <th>가격</th>
              <th>적립금</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id} className="cart_info_td">
                <td>
                  <input
                    type="checkbox"
                    className="individual_cart_checkbox"
                    onChange={handleCheckboxChange}
                  />
                </td>
                <td>{item.name}</td>
                <td>
                  <input
                    type="number"
                    defaultValue={item.count}
                    className="individual_bookCount_input"
                  />
                </td>
                <td>
                  <input
                    type="number"
                    defaultValue={item.price}
                    className="individual_totalPrice_input"
                    disabled
                  />
                </td>
                <td>
                  <input
                    type="number"
                    defaultValue={item.point}
                    className="individual_totalPoint_input"
                    disabled
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* 총 주문 정보 */}
        <div>
          <div>
            총 상품금액:{' '}
            <span className="totalPrice_span">
              {totalPrice.toLocaleString()}
            </span>
            원
          </div>
          <div>
            총 상품수량: <span className="totalCount_span">{totalCount}</span>개
          </div>
          <div>
            총 상품종류: <span className="totalKind_span">{totalKind}</span>종류
          </div>
          <div>
            총 적립금:{' '}
            <span className="totalPoint_span">
              {totalPoint.toLocaleString()}
            </span>
            원
          </div>
          <div>
            배송비: <span className="delivery_price">{deliveryPrice}</span>원
          </div>
          <div>
            총 결제금액:{' '}
            <span className="finalTotalPrice_span">
              {finalTotalPrice.toLocaleString()}
            </span>
            원
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
