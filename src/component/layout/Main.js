import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Header from '../header/Header';
import './Main.css';
import styles from './Main.module.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';
import { Link } from 'react-router-dom';

export default function App() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch('/banner.json')
      .then((res) => res.json())
      .then((data) => {
        setItems(data.banner_contents);
        console.log({ items: data.banner_contents });
      });
  }, []);

  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <Header />
      <main>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper"
        >
          {items.map((item, idx) => {
            return (
              <SwiperSlide key={idx}>
                <img width="100%" src={item.image_url} />
              </SwiperSlide>
            );
          })}
          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
        <div class={styles.css_1yqrra9}>
          <div class={styles.css_1702gi6}>
            <div class={styles.css_2qd0l8}>
              <a href="/">
                <img
                  src="https://image.ohou.se/i/bucketplace-v2-development/uploads/shortcut/home_feed_shortcut_sets/167262690767101882.png?w=144"
                  srcset="https://image.ohou.se/i/bucketplace-v2-development/uploads/shortcut/home_feed_shortcut_sets/167262690767101882.png?w=144"
                  class={styles.css_1511w17}
                />
                <span class={styles.css_xd55zv}>쇼핑하기</span>
              </a>
            </div>
            <div class={styles.css_2qd0l8}>
              <a href="/">
                <img
                  src="https://image.ohou.se/i/bucketplace-v2-development/uploads/shortcut/home_feed_shortcut_sets/167560796594045726.png?w=144"
                  srcset="https://image.ohou.se/i/bucketplace-v2-development/uploads/shortcut/home_feed_shortcut_sets/167560796594045726.png?w=144"
                  class={styles.css_1511w17}
                />
                <span class={styles.css_xd55zv}>오!굿즈</span>
              </a>
            </div>
            <div class={styles.css_2qd0l8}>
              <a href="/today_deals">
                <img
                  src="https://image.ohou.se/i/bucketplace-v2-development/uploads/shortcut/home_feed_shortcut_sets/167198007152582471.png?w=144"
                  srcset="https://image.ohou.se/i/bucketplace-v2-development/uploads/shortcut/home_feed_shortcut_sets/167198007152582471.png?w=144 "
                  class={styles.css_1511w17}
                />
                <span class={styles.css_xd55zv}>오늘의딜</span>
              </a>
            </div>
            <div class={styles.css_2qd0l8}>
              <a href="/">
                <img
                  src="https://image.ohou.se/i/bucketplace-v2-development/uploads/shortcut/home_feed_shortcut_sets/167505411234148010.png?w=144"
                  srcset="https://image.ohou.se/i/bucketplace-v2-development/uploads/shortcut/home_feed_shortcut_sets/167505411234148010.png?w=144 "
                  class={styles.css_1511w17}
                />
                <span class={styles.css_xd55zv}>취향의발견</span>
              </a>
            </div>
            <div class={styles.css_2qd0l8}>
              <a href="/">
                <img
                  src="https://image.ohou.se/i/bucketplace-v2-development/uploads/shortcut/home_feed_shortcut_sets/167198009533480922.png?w=144"
                  srcset="https://image.ohou.se/i/bucketplace-v2-development/uploads/shortcut/home_feed_shortcut_sets/167198009533480922.png?w=144 "
                  class={styles.css_1511w17}
                />
                <span class={styles.css_xd55zv}>식품관</span>
              </a>
            </div>
            <div class={styles.css_2qd0l8}>
              <Link to="/self">
                <img
                  src="https://image.ohou.se/i/bucketplace-v2-development/uploads/shortcut/home_feed_shortcut_sets/167198010271968429.png?w=144"
                  srcset="https://image.ohou.se/i/bucketplace-v2-development/uploads/shortcut/home_feed_shortcut_sets/167198010271968429.png?w=144"
                  class={styles.css_1511w17}
                />
                <span class={styles.css_xd55zv}>집들이</span>
              </Link>
            </div>
            <div class={styles.css_2qd0l8}>
              <a href="/">
                <img
                  src="https://image.ohou.se/i/bucketplace-v2-development/uploads/shortcut/home_feed_shortcut_sets/167198011151662026.png?w=144"
                  srcset="https://image.ohou.se/i/bucketplace-v2-development/uploads/shortcut/home_feed_shortcut_sets/167198011151662026.png?w=144"
                  class={styles.css_1511w17}
                />
                <span class={styles.css_xd55zv}>꿀잼시리즈</span>
              </a>
            </div>
            <div class={styles.css_2qd0l8}>
              <a href="/">
                <img
                  src="https://image.ohou.se/i/bucketplace-v2-development/uploads/shortcut/home_feed_shortcut_sets/167198012024333402.png?w=144"
                  srcset="https://image.ohou.se/i/bucketplace-v2-development/uploads/shortcut/home_feed_shortcut_sets/167198012024333402.png?w=144"
                  class={styles.css_1511w17}
                />
                <span class={styles.css_xd55zv}>빠른배송</span>
              </a>
            </div>
            <div class={styles.css_2qd0l8}>
              <a href="/">
                <img
                  src="https://image.ohou.se/i/bucketplace-v2-development/uploads/shortcut/home_feed_shortcut_sets/167198021046015480.png?w=144"
                  srcset="https://image.ohou.se/i/bucketplace-v2-development/uploads/shortcut/home_feed_shortcut_sets/167198021046015480.png?w=144"
                  class={styles.css_1511w17}
                />
                <span class={styles.css_xd55zv}>쉬운이사</span>
              </a>
            </div>
            <div class={styles.css_2qd0l8}>
              <a href="/">
                <img
                  src="https://image.ohou.se/i/bucketplace-v2-development/uploads/shortcut/home_feed_shortcut_sets/167198022841390557.png?w=144"
                  srcset="https://image.ohou.se/i/bucketplace-v2-development/uploads/shortcut/home_feed_shortcut_sets/167198022841390557.png?w=144"
                  class={styles.css_1511w17}
                />
                <span class={styles.css_xd55zv}>리모델링</span>
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
