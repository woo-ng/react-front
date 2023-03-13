# 🏡우리의집

오늘의집 클론코딩 프로젝트입니다.
<br>
<br>

## 🗒️프로젝트 기간

**2023.02.07. ~ 2023.03.13.**

<br>

## 🗒️주요 기능

- `axios`로 외부 `api`와의 연동
- `proxy` 서버로 `cors` 관리
- `react-query`, `intersection Observer`를 이용한 무한스크롤 기능

<br>

## 📋 기술 스택

### **`Frontend`**

- JavaScript, React, Bootstrap, jQuery

### **`Backend`**

- JSP, Spring Boot

<br>

## 💾 디렉토리 구조

```
├─ src
│  │  ├─ App.js
│  │  ├─ components
│  │  │  ├─ detail
│  │  │  │  ├─ BodyPage.js
│  │  │  │  ├─ BodyPage.scss
│  │  │  │  ├─ Category.js
│  │  │  │  ├─ Category.scss
│  │  │  │  ├─ DeliveryTab.js
│  │  │  │  ├─ DeliveryTab.scss
│  │  │  │  ├─ MoreView.js
│  │  │  │  ├─ MoreView.scss
│  │  │  │  ├─ QuestionTab.js
│  │  │  │  ├─ QuestionTab.scss
│  │  │  │  ├─ RecommendTab.js
│  │  │  │  ├─ RecommendTab.scss
│  │  │  │  ├─ ReviewPage.js
│  │  │  │  ├─ ReviewPage.scss
│  │  │  │  ├─ SelectBox.js
│  │  │  │  ├─ SelectBox.scss
│  │  │  │  ├─ Selling.js
│  │  │  │  ├─ Selling.scss
│  │  │  │  ├─ SellingOptions.js
│  │  │  │  └─ SellingOptions.scss
│  │  │  ├─ header
│  │  │  │  ├─ Header.js
│  │  │  │  ├─ Header.scss
│  │  │  │  └─ ToggleMenu.js
│  │  │  ├─ layout
│  │  │  │  ├─ Feed.js
│  │  │  │  ├─ Feed.scss
│  │  │  │  ├─ Login.js
│  │  │  │  ├─ Login.scss
│  │  │  │  ├─ Main.css
│  │  │  │  ├─ Main.js
│  │  │  │  ├─ Main.module.css
│  │  │  │  ├─ Member.js
│  │  │  │  ├─ Member.scss
│  │  │  │  ├─ newTag.svg
│  │  │  │  ├─ TodayDeal.module.scss
│  │  │  │  └─ TodayDeals.js
│  │  │  ├─ Product.js
│  │  │  ├─ Product.module.scss
│  │  │  ├─ Timer.js
│  │  ├─ cs
│  │  │  ├─ CategoryFilter.css
│  │  │  ├─ CategoryFilter.js
│  │  │  ├─ CsBox.css
│  │  │  ├─ CsBox.js
│  │  │  ├─ FAQ.css
│  │  │  ├─ FAQ.js
│  │  │  ├─ HorizontalLine.js
│  │  │  ├─ index.js
│  │  │  ├─ QnaCard.js
│  │  │  └─ useMoveScroll.js
│  │  ├─ hook
│  │  ├─ App.js
│  │  ├─ App.scss
│  │  ├─ App.test.js
│  │  ├─ flqb.svg
│  │  ├─ index.css
│  │  ├─ index.js
│  │  ├─ logo.svg
│  │  ├─ reportWebVitals.js
│  │  ├─ setupTests.js
│  │  ├─ shgkdn.svg
│  │  ├─ tkwls.svg
│  │  ├─ tlrhd.svg
│  │  ├─ wlfans.svg
│  │  └─ wlqemfdl.svg
```

<br>

## 🔎 컴포넌트 구조

- ## **`detail`**

  - **`MoreView.js`**: 메뉴바, 클릭시 해당 컴포넌트로 이동
  - **`Category.js`**: 카테고리 슬라이드바, 마우스오버시에 카테고리 보이기 기능
  - **`BodyPage.js`**: 상품정보 탭, 전체보기 클릭시 숨겨진 이미지 보이기 기능
  - **`ReviewPage.js`**: 리뷰 탭
  - **`QuestionTab.js`**: 문의 탭, 문의 글 남기기 기능
  - **`DeliveryTab.js`**: 배송/교환/환불 탭
  - **`RecommendTab.js`**: 추천 탭이 구현된 탭
  - **`SelectBox.js`**: 옵션 컴포넌트
  - **`Selling.js`**: 구매 페이지 상세정보 구현
  - **`SellingOptions.js`**: 구매 페이지 장바구니 선택 목록 기능 구현 컴포넌트

- ## **`header`**

  - **`Header.js`**: 상단바 구현 컴포넌트
  - **`ToggleMenu.js`**: 글쓰기 버튼 클릭시 토글메뉴 출력 컴포넌트

- ## **`layout`**

  - **`Feed.js`**: DB와 연동되어 검색기능 활성화 컴포넌트
  - **`Login.js`**: 로그인 화면 컴포넌트
  - **`Main.js`**: 슬라이드 화면 구현, 바로가기 버튼 구현
  - **`Member.js`**: 회원가입 구현
  - **`TodayDeals.js`**: 오늘의딜 화면 구현
  - **`Self.js`**: fetch 이용하여 집들이 페이지 구현

- ## **`cs`**

  - **`CategoryFilter.js`**: 카테고리 필터별로 나누는 기능
  - **`CsBox.js`**: FAQ 누르면 해당 Q&A로 이동하는 기능, 그 외 cs센터 설명
  - **`FAQ.js`**: 질문 정리(Q&A식)
  - **`HorizontalLine.js`**: 가운데 페이지 나눠주는 가로선
  - **`index.js`**
  - **`QnaCard.js`**: : 질문 누르면 대답 펼쳐지는 기능
  - **`useMoveScroll.js`**: FAQ 누르면 해당 Q&A로 이동하는 기능

- **`Product.js`**: 상품 정보 컴포넌트
- **`Timer.js`**: 상품 목록 위에 보이는 타이머 기능 컴포넌트
- **`App.js`**: 메인 화면의 버튼 클릭시 이동하는 컴포넌트
- **`App.test.js`**
- **`index.js`**

## 👨‍💻팀 구성

- 김정웅, 임태이, 박진아, 엄규식
