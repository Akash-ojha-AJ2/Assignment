import { NavLink } from "react-router-dom";
import "./Navbar.css"; 

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>BeyondChats</h2>

      <div style={styles.links}>
        <NavLink
          to="/"
          style={({ isActive }) =>
            isActive ? styles.activeLink : styles.link
          }
        >
          Original Articles
        </NavLink>

        <NavLink
          to="/enhanced"
          style={({ isActive }) =>
            isActive ? styles.activeLink : styles.link
          }
        >
          Enhanced Articles
        </NavLink>
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 40px",
    backgroundColor: "#0f172a",
  },
  logo: {
    color: "#fff",
    margin: 0,
  },
  links: {
    display: "flex",
    gap: "20px",
  },
  link: {
    color: "#cbd5f5",
    textDecoration: "none",
    fontSize: "16px",
  },
  activeLink: {
    color: "#38bdf8",
    fontWeight: "bold",
    textDecoration: "none",
    fontSize: "16px",
  },
};

export default Navbar;
