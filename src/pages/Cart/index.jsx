import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity
} from "../../redux/cartSlice.js";
import styles from "./cartPage.module.css";
import { toman } from "../../utility/priceUtils.js";

const Card = () => {
  const dispatch = useDispatch();
  const { cartItems, totalPrice, totalQuantity } = useSelector(
    (state) => state.cart
  );
  return (
    <div className={styles.container}>
      <h2>🛒 سبد خرید</h2>

      {cartItems.length === 0 ? (
        <p>سبد خرید خالی است.</p>
      ) : (
        <>
          <ul className={styles.cartList}>
            {cartItems.map((item) => (
              <li key={item.id} className={styles.cartItem}>
                <img src={item.thumbnail} alt={item.title} />
                <div className={styles.info}>
                  <h4>{item.title}</h4>
                  <p>قیمت: {toman(item.price).toLocaleString()} تومان</p>
                  <div className={styles.controls}>
                    <button onClick={() => dispatch(increaseQuantity(item.id))}>
                      +
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => dispatch(decreaseQuantity(item.id))}>
                      −
                    </button>
                  </div>
                  <button
                    className={styles.delete}
                    onClick={() => dispatch(removeFromCart(item.id))}
                  >
                    🗑 حذف
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className={styles.summary}>
            <p>
              🧮 تعداد کل: <strong>{totalQuantity}</strong>
            </p>
            <p>
              💰 قیمت نهایی:{" "}
              <strong>{toman(totalPrice).toLocaleString()} تومان</strong>
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
