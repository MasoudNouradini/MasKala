import { useDispatch, useSelector } from "react-redux";
import styles from "./cartDropdown.module.css";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart
} from "../../redux/cartSlice.js";
import { Link } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";
import { TiShoppingCart } from "react-icons/ti";
import { toman } from "../../utility/priceUtils.js";

const CartDropdown = () => {
  const { cartItems, totalPrice, totalQuantity } = useSelector(
    (state) => state.cart
  );

  const dispatch = useDispatch();
  if (cartItems.length === 0) {
    return (
      <div className={styles.dropdown}>
        <p className={styles.empty}>سبد خرید خالی است</p>
      </div>
    );
  }
  return (
    <div className={styles.dropdown}>
      <p className={styles.quantity}>
        <TiShoppingCart /> تعداد کل: <strong>{totalQuantity}</strong> کالا
      </p>

      <div className={styles.itemsContainer}>
        {cartItems.map((item) => (
          <div key={item.id} className={styles.item}>
            <img src={item.thumbnail} alt={item.title} />
            <div className={styles.itemDetails}>
              <p className={styles.title}>{item.title}</p>
              <p className={styles.price}>
                {toman(item.price).toLocaleString()} تومان
              </p>
              <div className={styles.controls}>
                <button onClick={() => dispatch(increaseQuantity(item.id))}>
                  +
                </button>
                <span>{item.quantity}</span>
                <button onClick={() => dispatch(decreaseQuantity(item.id))}>
                  -
                </button>
              </div>
            </div>
            <button
              className={styles.removeBtn}
              onClick={() => dispatch(removeFromCart(item.id))}
            >
              <MdDeleteForever />
            </button>
          </div>
        ))}
      </div>

      <div className={styles.total}>
        جمع کل: <strong>{toman(totalPrice).toLocaleString()} تومان</strong>
      </div>

      <Link to="/card" className={styles.viewCart}>
        مشاهده سبد خرید
      </Link>
    </div>
  );
};
export default CartDropdown;
