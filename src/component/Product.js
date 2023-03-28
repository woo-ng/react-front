import styles from './Product.module.scss';
import Timer from './Timer';

function Product(props) {
  return (
    <article class={styles.product}>
      <a href={`productions/${props.id}`}>
        <div class={styles.img_container}>
          <img class={styles.picture} src={props.src} />
          {props.timer && <Timer class={styles.timer} />}
        </div>
        <div class={styles.companyName}>{props.companyName}</div>
        <span class={styles.title}>{props.title}</span>
        <div>
          <span class={styles.discountRate}>{props.discountRate}</span>
          <span class={styles.price}>{props.price.toLocaleString()}</span>
        </div>
        <div>
          <span class={styles.star}>★</span>
          <span class={styles.grade}>{props.grade}</span>
          <span class={styles.review}>{props.review.toLocaleString()}</span>
        </div>
      </a>
    </article>
  );
}

export default Product;
