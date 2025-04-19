import { useSelector } from "react-redux";
import ProductCard from "../../components/ProductCard";
import { useGetSmartphonesQuery } from "../../services/productsApi";

import { useEffect, useState } from "react";

const Home = () => {
  const { data, error, isLoading } = useGetSmartphonesQuery();
  const query = useSelector((state) => state.search.query);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (data?.products) {
      const filtered = data.products.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  }, [data, query]);

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
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
