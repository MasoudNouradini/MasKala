import styles from "./contactInfo.module.css";
import { FaPhone, FaHeadset, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <div className={styles.infoBox}>
      <div className={styles.infoItem}>
        <FaPhone className={styles.icon} />
        <p>09170216748</p>
      </div>

      <div className={styles.infoItem}>
        <FaHeadset className={styles.icon} />
        <p>
          شنبه تا چهارشنبه ۹:۰۰ تا ۲۲:۰۰ <br />
          پنج‌شنبه‌ها ۹:۰۰ تا ۱۴:۰۰
        </p>
      </div>

      <div className={styles.infoItem}>
        <FaEnvelope className={styles.icon} />
        <p>masoud.software3165@gmail.com</p>
      </div>

      <div className={styles.infoItem}>
        <FaMapMarkerAlt className={styles.icon} />
        <p>
          تهران، سعادت‌آباد، بالاتر از میدان کاج <br />
          خیابان ششم، پلاک ۳۴، طبقه ۳، واحد ۸
        </p>
      </div>
    </div>
  );
};

export default ContactInfo;
