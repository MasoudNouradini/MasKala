import { Link } from "react-router-dom";
import styles from "./header.module.css";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { setQuery } from "../../redux/searchSlice";
import { useState } from "react";
import CartDropdown from "../CartDropdown";

const Header = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const [showDropdown, setShowDropdown] = useState(false);

  const dispatch = useDispatch();
  const query = useSelector((state) => state.search.query);
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.imageContainer}>
          <Link to={"/"}>
            <img src="../images/maslogo.png" alt="logo" />
          </Link>
        </div>
        <div className={styles.inputContainer}>
          <input
            className={styles.searchInput}
            type="text"
            placeholder="کالا مورد نظر خود را جستجو کنید"
            value={query}
            onChange={(e) => dispatch(setQuery(e.target.value))}
          />
          <CiSearch className={styles.searchIcon} />
        </div>
        <div
          className={styles.card}
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          <Link to={"/card"}>
            <MdOutlineShoppingCart fontSize={"30px"} color="#000" />
            {totalQuantity > 0 && (
              <span className={styles.badge}>{totalQuantity}</span>
            )}
          </Link>
          <p>سفارشات</p>
          {showDropdown && <CartDropdown />}
        </div>
      </div>
    </div>
  );
};

export default Header;
