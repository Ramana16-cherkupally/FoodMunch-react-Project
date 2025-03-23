import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";

export const Footer = () => {
  return (
    <footer className="footer bg-dark text-white text-center shadow-lg py-2">
      <div className="row g-2">
        <div className="col-md-4">
          <h4 className="text-uppercase">FoodMunch</h4>
          <p>
            Discover the best food near you, delivered with speed and freshness.
            At FoodMunch, we bring a world of flavors to your doorstep!
          </p>
        </div>
        <div className="col-md-4 QuickLink">
          <h4 className="text-uppercase">Quick Links</h4>
          <ul className="list-unstyled mb-0">
            <li>
              <a href="#" className="text-white text-decoration-none">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-white text-decoration-none">
                Menu
              </a>
            </li>
            <li>
              <a href="#" className="text-white text-decoration-none">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="text-white text-decoration-none">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-4 mb-2 text-center social-section">
          <h4 className="text-uppercase">Follow Us</h4>
          <div className="icons">
            <span>
              <FaGithub />
            </span>
            <span>
              <FaLinkedin />
            </span>
            <span>
              <FiTwitter />
            </span>
          </div>
        </div>
      </div>
      <hr className="my-1 border-secondary" />
      <p className="mb-0">
        &copy; {new Date().getFullYear()} FoodMunch. All Rights Reserved.
      </p>
    </footer>
  );
};
