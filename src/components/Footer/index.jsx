import styles from "./footer.module.css";
import {
  FaInstagram,
  FaYoutube,
  FaTelegramPlane,
  FaWhatsapp
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.section}>
          <h4>دسترسی سریع</h4>
          <ul>
            <li>
              <Link to="/">خانه</Link>
            </li>
            <li>
              <Link to="/installments">فروش اقساطی</Link>
            </li>

            <li>
              <Link to="/contact">تماس با ما</Link>
            </li>
          </ul>
        </div>

        <div className={styles.section}>
          <h4>شبکه‌های اجتماعی</h4>
          <div className={styles.socials}>
            <a href="#" aria-label="instagram">
              <FaInstagram />
            </a>
            <a href="#" aria-label="youtube">
              <FaYoutube />
            </a>
            <a href="#" aria-label="telegram">
              <FaTelegramPlane />
            </a>
            <a href="#" aria-label="whatsapp">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} ماس‌کالا - تمامی حقوق محفوظ است.</p>
      </div>
    </footer>
  );
};

export default Footer;
