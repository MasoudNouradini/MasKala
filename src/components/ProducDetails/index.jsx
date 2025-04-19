import { useParams } from "react-router-dom";
import { useGetSmartphonesQuery } from "../../services/productsApi";
import { toman } from "../../utility/priceUtils.js";
import { addToCart } from "../../redux/cartSlice.js";
import { useDispatch } from "react-redux";
import styles from "./productDetail.module.css";

const ProducDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { data, isLoading, error } = useGetSmartphonesQuery();
  if (isLoading) return <p>در حال بارگذاری...</p>;
  if (error) return <p>خطا در دریافت اطلاعات!</p>;

  const product = data.products.find((item) => item.id === parseInt(id));
  if (!product) return <p>محصولی یافت نشد!</p>;
  const priceInToman = toman(product.price);

  return (
    <div className={styles.container}>
      {/* سمت چپ - گالری */}
      <div className={styles.imageSection}>
        <img
          src={product.thumbnail}
          alt={product.title}
          className={styles.mainImage}
        />
        <div className={styles.gallery}>
          {product.images?.map((img, i) => (
            <img key={i} src={img} alt={`${product.title}-${i}`} />
          ))}
        </div>
      </div>

      {/* سمت راست - مشخصات و توضیحات */}
      <div className={styles.detailsSection}>
        <h2>{product.title}</h2>
        <p>
          <strong>برند:</strong> {product.brand}
        </p>
        <p>
          <strong>قیمت:</strong> {priceInToman.toLocaleString()} تومان
        </p>
        {product.discountPercentage > 0 && (
          <p className={styles.discount}>
            تخفیف: {product.discountPercentage}%
          </p>
        )}
        <p>
          <strong>امتیاز:</strong> {product.rating} ⭐
        </p>
        <p className={styles.description}>{product.description}</p>

        <div className={styles.specs}>
          <h4>مشخصات فنی:</h4>
          <p>
            <strong>وزن:</strong> {product.weight} گرم
          </p>
          <p>
            <strong>ابعاد:</strong> {product.dimensions?.width} ×{" "}
            {product.dimensions?.height} × {product.dimensions?.depth} mm
          </p>
          <p>
            <strong>گارانتی:</strong> {product.warrantyInformation}
          </p>
          <p>
            <strong>ارسال:</strong> {product.shippingInformation}
          </p>
          <p>
            <strong>حداقل سفارش:</strong> {product.minimumOrderQuantity} عدد
          </p>
        </div>

        <button
          className={styles.addButton}
          onClick={() => dispatch(addToCart(product))}
        >
          افزودن به سبد خرید 🛒
        </button>
      </div>
    </div>
  );
};

export default ProducDetails;
