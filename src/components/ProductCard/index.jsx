import { useDispatch } from "react-redux";
import styles from "./productCard.module.css";
import { addToCart } from "../../redux/cartSlice.js";
import { TiShoppingCart } from "react-icons/ti";
import { Link } from "react-router-dom";
import { toman } from "../../utility/priceUtils.js";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addToCart(product));
  };

  const priceInToman = toman(product.price);

  return (
    <div className={styles.card}>
      <Link to={`/product/${product.id}`}>
        <img
          src={product.thumbnail}
          alt={product.title}
          className={styles.image}
        />
      </Link>

      <div className={styles.info}>
        <h4>{product.title}</h4>
        <p>برند: {product.brand}</p>
        <p>قیمت: {priceInToman.toLocaleString()} تومان</p>
      </div>

      <div className={styles.actions}>
        <button className={styles.btn} onClick={handleAdd}>
          <TiShoppingCart size={18} /> افزودن به سبد
        </button>
        <Link to={`/product/${product.id}`} className={styles.detailsButton}>
          مشاهده جزئیات
        </Link>
      </div>
    </div>
  );
};
export default ProductCard;
