import React, { useState } from 'react';

import './SellingOptions.scss';

function SellingOptions(props) {
  const [optionMap, setOptionMap] = useState({});

  const amount = Object.values(optionMap).reduce((a, b) => a + parseInt(b), 0);
  const totalPrice = (amount * props.price).toLocaleString();

  const handleOnChange = (e) => {
    const target = e.target; // 이벤트 대상: select 박스
    const value = target.value;
    if (value === '') return; // 예외처리
    target.value = '';
    // 선택된 데이터 가져오기
    optionMap[value] = optionMap[value] ? optionMap[value] + 1 : 1;
    setOptionMap({ ...optionMap });
  };

  return (
    <div id="item-option">
      <select id="user-option" onChange={handleOnChange}>
        <option value="">옵션을 선택해주세요.</option>
        <option value="option1">option1</option>
        <option value="option2">option2</option>
        <option value="option3">option3</option>
        <option value="option4">option4</option>
        <option value="option5">option5</option>
      </select>
      <div id="optionContainer">
        {Object.entries(optionMap).map(([name, value], index) => (
          <Option
            key={index}
            amount={value}
            setAmount={(value) => {
              if (value == 0) delete optionMap[name];
              else optionMap[name] = value;
              setOptionMap({ ...optionMap });
            }}
            name={name}
            price={props.price}
          />
        ))}
      </div>
      <div class="moneyBox">
        <span class="money">주문금액</span>
        <span class="money2">{totalPrice}원</span>
      </div>
    </div>
  );
}

function Option(props) {
  const price = (props.price * props.amount).toLocaleString();
  const handleChange = (e) => {
    props.setAmount(e.target.value);
  };
  const handleRemove = (e) => {
    props.setAmount(0);
  };
  return (
    <div className="optionLayer">
      <p className="optionItem">{props.name}</p>
      <button id="removeBtn" onClick={handleRemove}>
        X
      </button>
      <select id="amount" value={props.amount} onChange={handleChange}>
        <option value="">수량</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <span className="money3">{price}원</span>
    </div>
  );
}

export default SellingOptions;
