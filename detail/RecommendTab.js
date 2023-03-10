import axios from 'axios';
import { useQuery } from 'react-query';
import Product from '../Product';
import './RecommendTab.scss';

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
      <div class="products">
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

export default RecommendTab;
