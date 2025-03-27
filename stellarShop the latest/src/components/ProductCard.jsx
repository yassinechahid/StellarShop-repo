import React, { useState } from "react";
import { FaStar, FaShoppingCart } from "react-icons/fa";
import { addToCart } from "../redux/cartSlice";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "../productCard.css";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const [userRating, setUserRating] =useState(0); // State to hold user's rating
  const handleAddToCart = (e, product) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(addToCart({ ...product, quantity: 1 }));
    alert(`${product.name} added to cart!`);
  };
  const navigate=useNavigate()
  const handleStarClick = (rating) => {
    setUserRating(rating); // Set the rating when a star is clicked
  };
  const handleCardClick = () => {
    // Navigate to the product details page
    navigate(`/product/${product.id}`);
  };
  return (
    
      <div  className="bg-white py-2 shadow rounded position-relative border product-card  d-flex flex-column h-100" style={{maxWidth:"350px"} }>
       <div onClick={handleCardClick} 
  style={{maxWidth:290, maxHeight:310, minHeight:320}} 
  >
       <img
          src={product.image}
          alt={product.name}
          className="w-100 h-100 object-contain mb-4"
          style={{cursor:"pointer"}}
        />
       </div>

        <div className="card-body">
          <h5 className="card-title" style={{cursor:"pointer", color: "blue"}} onClick={handleCardClick}>{product.name}</h5>

          <p className="text fw-bold " style={{cursor:"pointer", color:"red"}} onClick={handleCardClick}>${product.price}</p>

          <div className="d-flex align-items-center">
          <div className="d-flex">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={i < userRating ? "text-warning me-1" : "text-secondary me-1"} // Set color based on rating
                  onClick={() => handleStarClick(i + 1)} // Set rating on star click
                  style={{ cursor: "pointer" }} // Make stars clickable
                />
              ))}
            </div>
            <div className="ms-auto">
              <button
                className="btn btn-success add-to-cart-btn"
                onClick={(e) => handleAddToCart(e, product)}
                style={{marginRight:12}}
              >
                <span className="btn-icon">
                  <FaShoppingCart />
                </span>
                <span className="btn-text">Add to Cart</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default ProductCard;
