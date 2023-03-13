import React, { useState } from 'react';

import './SellingOptions.scss';

function SellingOptions(props) {
  const [optionList, setOptionList] = useState([]);

  // 데이터 삭제
  const handleRemoveOption = (index) => {
    const newList = optionList.filter((_, i) => i !== index);
    setOptionList(newList);
  };

  const handleOnChange = (e) => {
    const values = e.target.value;
    // 선택된 데이터 가져오기

    // 데이터 추가
    const $layer = (
      <div className="optionLayer">
        <p className="optionItem">{values}</p>
        <button
          id="removeBtn"
          onClick={() => handleRemoveOption(optionList.length)}
        >
          X
        </button>
        <select id="amount">
          <option value="">수량</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <span className="money3">{props.price}원</span>
      </div>
    );
    setOptionList([...optionList, $layer]);
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
        {optionList.map((option, index) => (
          <div key={index}>{option}</div>
        ))}
      </div>
    </div>
  );
}

export default SellingOptions;
