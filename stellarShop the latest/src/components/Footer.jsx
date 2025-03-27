import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import '../Navbar.css'
const Footer = ({ openLogin }) => {
  return (
    <footer className="bg-dark text-light py-5">
      <div className="container">
        <div className="row">
          {/* Brand Info */}
          <div className="col-12 col-md-4 mb-4 mb-md-0">
            <h3 className="h5 font-weight-bold text-primary">StellarShop</h3>
            <p className="mt-3 text-light">
              Your one-stop shop for all your needs. Shop with us and experience
              the best online shopping experience.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-12 col-md-4 mb-4 mb-md-0 text-center">
            <h4 className="h6 font-weight-bold text-info">Quick Links</h4>
            <ul className="list-unstyled mt-3">
              <li>
                <Link to="/" className="navbar-link text-light text-decoration-none hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shop" className="navbar-link text-light text-decoration-none hover:text-primary">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/contactpage" className="navbar-link text-light text-decoration-none hover:text-primary">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/aboutpage" className="navbar-link text-light text-decoration-none hover:text-primary">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media & Subscription */}
          <div className="col-12 col-md-4 mb-4 mb-md-0">
            <h4 className=" h6 font-weight-bold text-warning">Follow us</h4>
            <div className="d-flex justify-content-start mt-3">
              <a
                href="https://facebook.com" // Replace with actual URL
                className="navbar-lin text-light mx-2 hover:text-primary"
                aria-label="Facebook"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://twitter.com" // Replace with actual URL
                className="navbar-link text-light mx-2 hover:text-info"
                aria-label="Twitter"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://github.com" // Replace with actual URL
                className="navbar-lin text-light mx-2 hover:text-secondary"
                aria-label="GitHub"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://linkedin.com" // Replace with actual URL
                className="navbar-lin text-light mx-2 hover:text-info"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </a>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="mt-4 d-flex">
              <input
                type="email"
                placeholder="Enter Email"
                className="form-control border-right-0 bg-dark text-white rounded-0"
              />
              <button
                onClick={openLogin}
                className="btn btn-danger rounded-0"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-4 border-top pt-4 text-center">
          <p className="text-light small">
            &copy; {new Date().getFullYear()} StellarShop. All rights reserved.
          </p>
          <div className="mt-2 d-flex justify-content-center">
            <Link to="/privacypolicy" className="navbar-link text-light small hover:text-white mx-3">
              Privacy Policy
            </Link>

            <Link to="/termsandconditions" className="navbar-link text-light small hover:text-white mx-3">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
