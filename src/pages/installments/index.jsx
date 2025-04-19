import { useEffect, useState } from "react";
import styles from "./installments.module.css";

const formatNumber = (value) => {
  const number = value.replace(/\D/g, "");
  return number.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
const parseNumber = (value) => {
  return Number(value.replace(/,/g, ""));
};

const Installments = () => {
  const [totalPrice, setTotalPrice] = useState("");
  const [prePayment, setPrePayment] = useState("");
  const [installments, setInstallments] = useState(12);
  const [resultData, setResultData] = useState(null);

  const handleCalculate = () => {
    const total = parseNumber(totalPrice);
    const pre = parseNumber(prePayment);
    const remaining = total - pre;
    const interestRate = 0.04 * installments; // 4% به ازای هر ماه
    const interestAmount = Math.floor(remaining * interestRate);

    const finalAmount = remaining + interestAmount;
    const monthlyPayment = Math.floor(finalAmount / installments);

    setResultData({
      total,
      pre,
      interestAmount,
      finalAmount,
      monthlyPayment,
      installments
    });
  };

  return (
    <div>
      <h2>محاسبه اقساط</h2>
      <hr />
      <div className={styles.formContainer}>
        <div className={styles.containerRules}>
          <h4>شرایط و قوانین خرید قسطی</h4>
          <ol>
            <li>کارمزد فروش اقساطی 4 درصد است.</li>
            <li>حداکثر مدت زمان بازپرداخت خرید اقساطی 12 ماه است. </li>
          </ol>
        </div>

        <div className={styles.formGroup}>
          <label className={styles.formLabel}> مبلغ کل سفارش (تومان) </label>
          <input
            type="text"
            className={styles.formInput}
            value={totalPrice}
            onChange={(e) => setTotalPrice(formatNumber(e.target.value))}
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.formLabel}> مبلغ پیش پرداخت (تومان) </label>
          <input
            type="text"
            className={styles.formInput}
            value={prePayment}
            onChange={(e) => setPrePayment(formatNumber(e.target.value))}
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.formLabel}> تعداد اقساط</label>
          <select
            className={styles.formInput}
            value={installments}
            onChange={(e) => setInstallments(Number(e.target.value))}
          >
            {[...Array(12)].map((_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
        </div>

        <button className={styles.calculateButton} onClick={handleCalculate}>
          محاسبه
        </button>

        {resultData && (
          <div className={styles.resultContainer}>
            <div className={styles.resultCard}>
              <p>مبلغ سفارش</p>
              <strong>{formatNumber(resultData.total.toString())} تومان</strong>
            </div>
            <div className={styles.resultCard}>
              <p>کارمزد کل</p>
              <strong>
                {formatNumber(resultData.interestAmount.toString())} تومان
              </strong>
            </div>
            <div className={styles.resultCard}>
              <p>مبلغ پرداخت نهایی</p>
              <strong className={styles.finalAmount}>
                {formatNumber(
                  (resultData.finalAmount + resultData.pre).toString()
                )}{" "}
                تومان
              </strong>
            </div>
            <div className={styles.resultSummary}>
              <p>
                اقساط ماهیانه:{" "}
                {formatNumber(resultData.monthlyPayment.toString())} تومان
              </p>
              <p>تعداد اقساط: {resultData.installments} ماه</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Installments;
