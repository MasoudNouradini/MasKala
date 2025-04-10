import { Link } from "react-router-dom";
import styles from "./header.module.css";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { setQuery } from "../../redux/searchSlice";

const Header = () => {
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
        <div className={styles.card}>
          <Link to={"/card"}>
            <MdOutlineShoppingCart fontSize={"30px"} color="#000" />
          </Link>
          <p>سفارشات</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
