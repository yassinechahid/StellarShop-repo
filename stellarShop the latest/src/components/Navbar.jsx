import React, { useState } from "react";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Modal from "./Modal";
import Login from "./Login";
import Register from "./Register";
import { setSearchTerm } from "../redux/productSlice";
import '../Navbar.css'
import { Home } from "lucide-react";
const Navbar = ({ isModelOpen, openSignUp, openLogin, setIsModelOpen, isLogin }) => {
  const [search, setSearch] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(setSearchTerm(search));
    navigate("/filter-data");
  };

  const products = useSelector((state) => state.cart.products);

  return (
    <nav className="bg-white shadow-sm ">
      <div className="container py-3">
        <div className="d-flex justify-content-between align-items-center">
          {/* Brand */}
          <div className="fs-4 fw-bold wra">
            <Link to="/" className="text-dark text-decoration-none">
              StellarShop
            </Link>
          </div>

          {/* Search Bar */}
          <div className="d-flex flex-grow-1 mx-3 position-relative">
            <form className="w-100" onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="Search product"
                className="form-control py-2 ps-4 pe-5"
                onChange={(e) => setSearch(e.target.value)}
              />
              <FaSearch
                onClick={handleSearch}
                className="position-absolute top-50 end-0 translate-middle-y text-danger"
              />
            </form>
          </div>

          {/* Icons & Login/Register */}
          <div className="d-flex align-items-center">
            <Link to="/cart" className="navbar-link text-dark me-2 position-relative">
              <FaShoppingCart className="fs-4" />
              {products.length > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle px-1 bg-danger rounded-circle text-white ">
                  {products.length}
                </span>
              )}
            </Link>
            <button
              className="navbar-link d-none d-md-block btn btn-link text-dark fw-bold"
              onClick={() => setIsModelOpen(true)}
            >
              Login | Register
            </button>
            <button
              className="d-md-none btn btn-link text-dark"
              onClick={() => setIsModelOpen(true)}
            >
              <FaUser className="fs-4" />
            </button>
          </div>
        </div>

        {/* Navbar Links */}
        <div className="d-flex justify-content-center py-2">
          <Link
            to="/"
            className="navbar-link text-decoration-none text-dark me-3 fs-6 fw-bold hover-effect"
          >
           <Home/>
          </Link>
          <Link
            to="/shop"
            className="navbar-link text-decoration-none text-dark me-3 fs-6 fw-bold hover-effect"
          >
            Shop
          </Link>
          <Link
            to="/contactpage"
            className="navbar-link text-decoration-none text-dark me-3 fs-6 fw-bold hover-effect"
          >
            Contact
          </Link>
          <Link
            to="/aboutpage"
            className="navbar-link text-decoration-none text-dark me-3 fs-6 fw-bold hover-effect"
          >
            About
          </Link>
          <Link to="/admin" className='navbar-link text-decoration-none text-dark me-3 fs-6 fw-bold hover-effect'>
                adminlayout
            </Link>
        </div>
      </div>

      {/* Modal for Login/Register */}
      <Modal setIsModelOpen={setIsModelOpen} isModelOpen={isModelOpen}>
        {isLogin ? <Login openSignUp={openSignUp} setIsModelOpen={setIsModelOpen} /> : <Register openLogin={openLogin} />}
      </Modal>
    </nav>
  );
};

export default Navbar;
