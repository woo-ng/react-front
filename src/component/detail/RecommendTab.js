import axios from 'axios';
import { useEffect, useRef } from 'react';
import { useQuery } from 'react-query';
import Header from '../header/Header';
import './RecommendTab.scss';
import styles from '../layout/TodayDeal.module.scss';

const fetchProducts = async () => {
  const { data } = await axios.get('http://localhost:3000/todaydeals.json');
  return data;
};

const getDiscountPercentage = (sellingPrice, originalPrice) => {
  const discountPercentage = (1 - sellingPrice / originalPrice) * 100;
  return Math.round(discountPercentage) + '%';
};

function RecommendTab() {
  const { data, isLoading, error } = useQuery('products', fetchProducts);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  console.log(data.data.todayDeals.todayDeals);

  return (
    <div id="tab5" class="tab-pane fade" role="tabpanel">
      <div class={styles.products}>
        {data.data.todayDeals.todayDeals.map((p) => (
          <Product
            id={p.production.id}
            src={p.production.originalImageUrl}
            companyName={p.production.brand.name}
            title={p.title}
            discountRate={getDiscountPercentage(
              p.production.sellingPrice,
              p.production.originalPrice
            )}
            price={p.production.sellingPrice}
            grade={p.production.reviewAvg}
            review={p.production.reviewCount}
          />
        ))}
      </div>
    </div>
  );
}

function Product(props) {
  return (
    <article class={styles.product}>
      <a href={`productions/${props.id}`}>
        <div class={styles.img_container}>
          <img class={styles.picture} src={props.src} />
        </div>
        <div class={styles.companyName}>{props.companyName}</div>
        <span class={styles.title}>{props.title}</span>
        <div>
          <span class={styles.discountRate}>{props.discountRate}</span>
          <span class={styles.price}>{props.price}</span>
        </div>
        <div>
          <span class={styles.star}>★</span>
          <span class={styles.grade}>{props.grade}</span>
          <span class={styles.review}>{props.review}</span>
        </div>
      </a>
    </article>
  );
}

export default RecommendTab;
