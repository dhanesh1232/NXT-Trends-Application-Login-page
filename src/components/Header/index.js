// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav-bar">
    <div className="nav-items">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="logo-img"
      />
      <ul className="header-list-container">
        <li>
          <Link to="/" className="nav-link">
            <p>Home</p>
          </Link>
        </li>
        <li>
          <Link to="/products" className="nav-link">
            <p>Products</p>
          </Link>
        </li>
        <li>
          <Link to="/carts" className="nav-link">
            <p>Cart</p>
          </Link>
        </li>
      </ul>
      <ul className="mobile-view-nav-menu">
        <li>
          <Link to="/" className="nav-link-img">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
              alt="nav home"
            />
          </Link>
        </li>
        <li>
          <Link to="/products" className="nav-link-img">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
              alt="nav products"
            />
          </Link>
        </li>
        <li>
          <Link to="/carts" className="nav-link-img">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
              alt="nav home"
            />
          </Link>
        </li>
      </ul>
      <button type="button" className="btn-desktop-view">
        Logout
      </button>
      <button type="button" className="btn-mobile-view">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
          alt="nav logout"
          className="btn-logo-logout"
        />
      </button>
    </div>
  </nav>
)
export default Header
