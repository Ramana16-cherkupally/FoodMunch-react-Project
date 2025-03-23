import { useState } from "react";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { FaBagShopping } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

export const Header = ({ search, updatechange }) => {
  const [showMenu, setShowMenu] = useState(false);
  const Bag = useSelector((state) => state.Bag);

  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <section className="navbar bg-dark fixed-top text-white mb-5">
      <div className="container d-flex flex-wrap align-items-center justify-content-between shadow-lg text-white">
        {/* Logo */}
        <Link
          to="/"
          className="navbar-brand d-flex align-items-center text-white"
        >
          <img
            className="logo me-2"
            src="https://media.istockphoto.com/id/1193846052/vector/overlapping-one-line-letter-f-logotype.jpg?s=612x612&w=0&k=20&c=qTJpsqKVm2TXWyj3RJBZWdeRf-TEq99o6BwHeqt_JA4="
            alt="Logo"
            style={{ height: "40px" }}
          />
          <span className="fs-6 fw-bold text-white">MyStore</span>
        </Link>

        {/* Search Bar */}
        <form className="d-flex" role="search">
          <input
            type="text"
            className="form-control me-2"
            placeholder="Search for food..."
            value={search}
            onChange={(e) => updatechange(e.target.value)}
          />
          <button className="btn btn-outline-light text-white" type="submit">
            Search
          </button>
        </form>

        {/* Hamburger Menu Button */}
        <button
          className="hamburger bg-transparent text-white"
          onClick={toggleMenu}
        >
          <GiHamburgerMenu
            size={28}
            style={{
              color: "#ff9800",
              transform: showMenu ? "rotate(90deg)" : "rotate(0)",
              transition: "0.3s ease",
            }}
          />
        </button>

        {/* Navbar Menu Links */}
        <nav className={`menu ${showMenu ? "show" : ""}`}>
          <ul className="navbar-nav flex-column flex-lg-row text-white">
            <li className="nav-item me-3">
              <Link to="/app" className="nav-link hover-effect text-white">
                Home
              </Link>
            </li>
            <li className="nav-item me-3">
              <span className="nav-link hover-effect text-white">
                Dashboard
              </span>
            </li>
            <li className="nav-item">
              <span className="nav-link hover-effect text-white">About</span>
            </li>
          </ul>

          {/* Icons Section */}
          <div className="d-flex align-items-center mt-3 mt-lg-0">
            <span className="text-white me-3 hover-effect">
              <AiOutlineUser size={24} /> <span className="ms-1">Profile</span>
            </span>
            <span className="text-white me-3 hover-effect">
              <AiOutlineHeart size={24} />{" "}
              <span className="ms-1">Wishlist</span>
            </span>
            <Link
              to="bag"
              className="text-white position-relative hover-effect"
            >
              <FaBagShopping size={24} />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {Bag.length}
              </span>
              <span className="ms-1">Bag</span>
            </Link>
          </div>
        </nav>
      </div>
    </section>
  );
};
