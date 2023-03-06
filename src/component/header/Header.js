import React, { useState } from 'react';
import { ReactComponent as Logo } from '../../logo.svg';
import { BrowserView, MobileView } from 'react-device-detect';
import { ReactComponent as Tkwls } from '../../tkwls.svg';
import { ReactComponent as Wlqemfdl } from '../../wlqemfdl.svg';
import { ReactComponent as Shgkdn } from '../../shgkdn.svg';
import { ReactComponent as Flqb } from '../../flqb.svg';
import { ReactComponent as Tlrhd } from '../../tlrhd.svg';
import { ReactComponent as Wlfans } from '../../wlfans.svg';

import ToggleMenu from './ToggleMenu';
import styles from './Header.module.scss';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();

  const userData = sessionStorage.getItem('userData') ?? '{}';
  const user = JSON.parse(userData);

  const handleSearch = () => {
    // implement search functionality here using the searchValue state
    console.log('searching for', searchValue);
    navigate(`/feed?query=${searchValue}`);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('userData');
    window.location.href = '/main';
  };

  return (
    <>
      <BrowserView className={styles.header}>
        <div className="header-upper__inner">
          <div className="header-upper__logo">
            <a href="/">
              <Logo className={styles.logo_svg} width={null} height="43" />
            </a>
          </div>
        </div>

        <div className={styles.service}>
          <div className={styles.search_box}>
            <div className="header-upper__searchBar">
              <i className="fas fa-search" />

              <input
                type="text"
                placeholder="통합검색"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                onKeyDown={handleKeyDown} // add onKeyDown event listener
              />
            </div>
          </div>
          <div className={styles.right_menu}>
            <a href>
              <i className="fas fa-shopping-cart"></i>
            </a>
            <ul className="flex">
              {user.member_id ? (
                <>
                  <div>{user.member_name}님 환영합니다.</div>
                  <button onClick={handleLogout}>로그아웃</button>
                </>
              ) : (
                <>
                  <li>
                    <Link to="/sign_in">로그인</Link>
                  </li>
                  <li>
                    <a href>회원가입</a>
                  </li>
                  <li>
                    <Link to="/customer_center">고객센터</Link>
                  </li>
                </>
              )}

              <div className="header-upper__lists openWriteMenu"></div>
              <ToggleMenu className="header-upper__writeBt" title="글쓰기">
                <a className="css-1n4nww" href="new">
                  <div className="css-bjn8wh">
                    <Tkwls />
                  </div>
                  <div className="css-1qhmto6">
                    <div className="css-1w2j28v">사진/동영상 올리기</div>
                    <div className="css-n1vjup">
                      우리 집의 공간과 나의 일상을 기록해 보세요.
                    </div>
                  </div>
                </a>

                <a className="css-1n4nww" href="/projects/write">
                  <div className="css-bjn8wh">
                    <Wlqemfdl />
                  </div>
                  <div className="css-1qhmto6">
                    <div className="css-1w2j28v">집들이 글쓰기</div>
                    <div className="css-n1vjup">
                      집에 관한 이야기를 글로 작성해 보세요.
                    </div>
                  </div>
                </a>

                <a className="css-1n4nww" href="/projects/write">
                  <div className="css-bjn8wh">
                    <Shgkdn />
                  </div>
                  <div className="css-1qhmto6">
                    <div className="css-1w2j28v">노하우 글쓰기</div>
                    <div className="css-n1vjup">
                      다양한 인테리어 노하우를 공유해 주세요.
                    </div>
                  </div>
                </a>

                <a className="css-1n4nww" href="/projects/write">
                  <div className="css-bjn8wh">
                    <Flqb />
                  </div>
                  <div className="css-1qhmto6">
                    <div className="css-1w2j28v">상품 리뷰 쓰기</div>
                    <div className="css-n1vjup">
                      상품 리뷰를 작성하고 포인트도 받아 보세요.
                    </div>
                  </div>
                </a>

                <a className="css-1n4nww" href="/projects/write">
                  <div className="css-bjn8wh">
                    <Tlrhd />
                  </div>
                  <div className="css-1qhmto6">
                    <div className="css-1w2j28v">시공 전문가 리뷰쓰기</div>
                    <div className="css-n1vjup">
                      시공 전문가 리뷰를 작성하고 포인트도 받아 보세요.
                    </div>
                  </div>
                </a>

                <a className="css-1n4nww" href="/projects/write">
                  <div className="css-bjn8wh">
                    <Wlfans />
                  </div>
                  <div className="css-1qhmto6">
                    <div className="css-1w2j28v">인테리어 질문하기</div>
                    <div className="css-n1vjup">
                      인테리어 고수들과 전문가들에게 질문해 보세요.
                    </div>
                  </div>
                </a>
              </ToggleMenu>
            </ul>
          </div>
        </div>
      </BrowserView>

      <MobileView className={styles.header}>
        <div className={styles.service}>
          <a className="logo" href="/">
            <Logo />
          </a>
          <div className="header-upper__searchBar">
            <i className="fa-solid fa-magnifying-glass" />
            <input type="text" placeholder="통합검색"></input>
            <div className="udline"></div>
          </div>
        </div>
      </MobileView>
      <div className="udline"></div>
    </>
  );
};

export default Header;
