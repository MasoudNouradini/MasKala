import { Link } from "react-router-dom";
import styles from "./header.module.css";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CiSearch } from "react-icons/ci";

const Header = () => {
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
