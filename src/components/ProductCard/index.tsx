import styles from "./productCard.module.css";
const ProductCard = ({ product, dollarRate = 80000 }) => {
  const priceInToman = product.price * dollarRate;

  return (
    <div className={styles.card}>
      <img
        src={product.thumbnail}
        alt={product.title}
        className={styles.image}
      />
      <h4>گوشی موبایل : {product.title}</h4>
      <p> برند : {product.brand}</p>
      <p>قیمت : {priceInToman.toLocaleString()}</p>
    </div>
  );
};

export default ProductCard;
