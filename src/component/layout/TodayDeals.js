import axios from 'axios';
import { useQuery } from 'react-query';
import Header from '../header/Header';
import Product from '../Product';

import styles from './TodayDeal.module.scss';

const fetchProducts = async () => {
  const { data } = await axios.get('/todaydeals.json');
  return data;
};

const getDiscountPercentage = (sellingPrice, originalPrice) => {
  const discountPercentage = (1 - sellingPrice / originalPrice) * 100;
  return Math.round(discountPercentage) + '%';
};

function TodayDeals() {
  const { data, isLoading, error } = useQuery('products', fetchProducts);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  console.log(data.data.todayDeals.todayDeals);

  return (
    <>
      <Header />
      <main>
        <div class={styles.mainClass}>
          <div class={styles.titleName}>
            <h1>오늘의딜</h1>
            <h5 class={styles.text2}>매일 자정, 새로운 특가 상품</h5>
          </div>
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
                price={p.production.sellingPrice.toLocaleString()}
                grade={p.production.reviewAvg}
                review={p.production.reviewCount.toLocaleString()}
                timer={true}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default TodayDeals;
