import { NavLink } from "react-router-dom";
import { useGetSmartphonesQuery } from "../../services/productsApi.js";

import styles from "./navbar.module.css";
const Navbar = () => {
  const { data, isLoading } = useGetSmartphonesQuery();
  const brands = [...new Set(data?.products?.map((p) => p.brand))];
  const navItems = [
    {
      path: "/",
      label: "موبایل و تبلت",
      dynamicBrands: true
    },
    { path: "/contact", label: "تماس با ما" },
    { path: "/installments", label: "خرید اقساطی " }
  ];

  return (
    <nav className={styles.containerNavbar}>
      <ul className={styles.navList}>
        {navItems.map((item) => (
          <li
            key={item.path}
            className={item.dynamicBrands ? styles.dropdown : undefined}
          >
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive ? styles.activeLink : styles.navLink
              }
            >
              {item.label}
            </NavLink>

            {item.dynamicBrands && brands?.length > 0 && (
              <ul className={styles.dropdownMenu}>
                {brands.map((brand) => (
                  <li key={brand}>
                    <NavLink
                      to={`/brand/${brand.toLowerCase()}`}
                      className={styles.navLink}
                    >
                      {brand}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
