import styles from "./contactForm.module.css";
const ContactForm = () => {
  return (
    <form className={styles.form}>
      <h2 className={styles.title}>تماس با تیم ما</h2>
      <p className={styles.subtitle}>
        خیالتان راحت باشد، فقط کارشناسان ما این اطلاعات را می‌بینند.
      </p>

      <input
        type="text"
        placeholder="نام و نام خانوادگی"
        className={styles.input}
      />
      <input type="email" placeholder="ایمیل" className={styles.input} />
      <input type="tel" placeholder="شماره موبایل" className={styles.input} />

      <select className={styles.input}>
        <option value="">موضوع</option>
        <option value="support">پشتیبانی</option>
        <option value="order">سفارش</option>
        <option value="other">سایر</option>
      </select>

      <textarea
        placeholder="پیام خود را اینجا برایمان بنویسید..."
        className={styles.textarea}
      />

      <button type="submit" className={styles.button}>
        ارسال
      </button>
    </form>
  );
};

export default ContactForm;
