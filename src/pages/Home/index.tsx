import ProductCard from "../../components/ProductCard";
import { useGetSmartphonesQuery } from "../../services/productsApi";

const Home = () => {
  const { data, error, isLoading } = useGetSmartphonesQuery();

  if (isLoading) return <p>در حال بارگذاری...</p>;
  if (error) return <p>خطا در دریافت اطلاعات!</p>;

  return (
    <div>
      <h2>گوشی‌های موجود</h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
          padding: "1rem",
          margin: "0 auto",
          justifyContent: "center",
          maxWidth: "1200px"
        }}
      >
        {data?.products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
