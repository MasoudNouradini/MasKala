import { NavLink } from "react-router-dom";
import styles from "./navbar.module.css";
const Navbar = () => {
  const navItems = [
    {
      path: "/",
      label: "موبایل و تبلت",
      subItems: [
        { path: "/products/samsung", label: "گوشی سامسونگ" },
        { path: "/products/xiaomi", label: "گوشی شیائومی" },
        { path: "/products/iphone", label: "آیفون" }
      ]
    },
    { path: "/accessories", label: "لوازم جانبی" },
    { path: "/contact", label: "تماس با ما" },
    { path: "/installments", label: "خرید اقساطی " }
  ];

  return (
    <nav className={styles.containerNavbar}>
      <ul className={styles.navList}>
        {navItems.map((item) => (
          <li
            key={item.path}
            className={item.subItems ? styles.dropdown : undefined}
          >
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive ? styles.activeLink : styles.navLink
              }
            >
              {item.label}
            </NavLink>

            {item.subItems && (
              <ul className={styles.dropdownMenu}>
                {item.subItems.map((sub) => (
                  <li key={sub.path}>
                    <NavLink to={sub.path} className={styles.navLink}>
                      {sub.label}
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
