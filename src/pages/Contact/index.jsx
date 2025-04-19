import ContactForm from "../../components/ContactForm";
import ContactInfo from "../../components/ContactInfo";
import styles from "./contact.module.css";
const Contact = () => {
  return (
    <div className={styles.container}>
      <ContactInfo />
      <ContactForm />
    </div>
  );
};

export default Contact;
