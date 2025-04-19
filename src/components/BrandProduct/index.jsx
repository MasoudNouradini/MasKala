import { useParams } from "react-router-dom";
import { useGetSmartphonesQuery } from "../../services/productsApi.js";
import ProductCard from "../ProductCard/index.jsx";

const BrandProduct = () => {
  const { brandName } = useParams();

  const { data, isLoading, error } = useGetSmartphonesQuery();

  if (isLoading) return <p>در حال بارگذاری...</p>;
  if (error) return <p>خطا در دریافت اطلاعات</p>;
  if (!data || !data.products) return <p>محصولی یافت نشد</p>;

  const filtered = data.products.filter(
    (p) => p.brand.toLowerCase() === brandName.toLowerCase()
  );

  if (filtered.length === 0)
    return <p>محصولی برای برند «{brandName}» یافت نشد</p>;

  return (
    <div style={{ padding: "2rem" }}>
      <h2>محصولات برند: {brandName}</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "1rem",
        }}
      >
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default BrandProduct;
