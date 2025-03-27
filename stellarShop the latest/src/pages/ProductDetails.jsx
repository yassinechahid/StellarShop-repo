import React, { useEffect, useState } from "react";
import { FaCarSide } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { addToCart, updateQuantity } from "../redux/cartSlice";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const cartProducts = useSelector((state) => state.cart.products);
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (products.length > 0) {
      const newProduct = products.find((product) => product.id === parseInt(id));
      setProduct(newProduct);
    }
  }, [id, products]);

  useEffect(() => {
    if (product && cartProducts.length > 0) {
      const cartProduct = cartProducts.find((item) => item.id === product.id);
      if (cartProduct) {
        setQuantity(cartProduct.quantity);
      }
    }
  }, [cartProducts, product]);

  if (!product) {
    return <div className="text-center h5 py-5">Loading...</div>;
  }

  const handleAddToCart = () => {
    const existingProduct = cartProducts.find((item) => item.id === product.id);

    if (existingProduct) {
      dispatch(updateQuantity({ id: product.id, quantity }));
    } else {
      dispatch(
        addToCart({
          id: product.id,
          name: product.name,
          price: product.price,
          quantity,
          image: product.image,
        })
      );
      alert (`${product.name} added to cart`)
    }
  };

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    if (newQuantity > 0) {
      setQuantity(newQuantity);
    }
  };

  // Handling Increment and Decrement
  const handleIncrement = () => setQuantity((prevQuantity) => prevQuantity + 1);
  const handleDecrement = () => setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));

  return (
    <div className="container py-5">
      <div className="bg-white shadow-lg rounded-lg p-4 d-flex flex-column flex-md-row gap-4">
        
        {/* Left Section - Image & Description */}
        <div className="col-12 col-md-6 d-flex flex-column align-items-center align-items-md-start">
          <div className="rounded overflow-hidden d-flex align-items-center justify-content-center">
            <img 
              src={product.image} 
              alt={product.name} 
              className="img-fluid object-fit-contain" 
              style={{ maxWidth: 250, height: 'auto' }} 
            />
          </div>
  
          <div className="mt-4 bg-light p-3 rounded w-100 text-center text-md-start">
            <h3 className="h5 text-dark">Product Description</h3>
            <p className="text-muted mt-2">{product.description || "Product description will be displayed here."}</p>
          </div>
        </div>
  
        {/* Right Section - Product Info */}
        <div className="col-12 col-md-6 d-flex flex-column align-items-center align-items-md-start justify-content-center gap-3">
          <h2 className="h4 font-weight-semibold text-dark text-center text-md-start">{product.name}</h2>
          <p className="h5 text-primary font-weight-bold">${product.price}</p>
  
          {/* Quantity & Add to Cart */}
          <div className="d-flex align-items-center gap-3">
            <div className="d-flex align-items-center gap-2">
              {/* Decrease Button */}
              <button 
                onClick={handleDecrement}
                className="btn btn-outline-secondary px-2"
                disabled={quantity <= 1}
              >
                -
              </button>

              {/* Input Field */}
              <input
                type="number"
                id="quantity"
                min="1"
                value={quantity}
                onChange={handleQuantityChange}
                className="form-control text-center"
                style={{ width: "80px" }}
              />

              {/* Increase Button */}
              <button 
                onClick={handleIncrement}
                className="btn btn-outline-secondary px-2"
              >
                +
              </button>
            </div>
  
            <button 
              onClick={handleAddToCart}
              className="btn btn-primary px-4 py-2 rounded"
            >
              Add to Cart
            </button>
          </div>
  
          {/* Ask a Question */}
          <div className="d-flex align-items-center gap-2 text-primary cursor-pointer mt-3">
            <FaCarSide className="h4" />
            <Link to="/contactpage"><p className="mb-0 font-weight-medium">Ask a Question</p></Link>
          </div>
        </div>
  
      </div>
    </div>
  );
};

export default ProductDetails;
