import { useEffect } from 'react';
import './SelectBox.scss';
import $ from 'jquery';

function SelectBox({ children, label }) {
  useEffect(() => {
    // 클릭한 옵션의 텍스트를 라벨 안에 넣기
    const handleSelect = (item) => {
      let selectBox = item.parentNode.parentNode;
      console.log({ selectBox });
      selectBox.classList.remove('active');
      // .label
      selectBox.querySelector('.label').innerHTML = item.textContent;
    };

    // 옵션 클릭시 클릭한 옵션을 넘김
    $('.selectBox li')
      .off('click')
      .on('click', function () {
        handleSelect(this);
      });

    // 라벨을 클릭시 옵션 목록이 열림/닫힘
    $('.label')
      .off('click')
      .on('click', function () {
        console.log(this);
        $(this).parent().toggleClass('active');
      });
  });
  return (
    <div class="selectBox">
      <button class="label">{label}</button>
      <ul>{children}</ul>
    </div>
  );
}

export default SelectBox;
