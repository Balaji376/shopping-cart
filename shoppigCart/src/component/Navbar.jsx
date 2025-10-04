import { Link } from "react-router-dom";
import '../styles/navbar.css';

const Navbar = ({ size }) => {
  return (
    <nav>
      <div className="nav_box">
        <span className="my_shop">
          <Link to="/">My Shopping</Link>
        </span>
        <div className="cart">
          <Link to="/cart">
            <span>
              <i className="fas fa-cart-plus"></i>
            </span>
          </Link>
          <span>{size}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
