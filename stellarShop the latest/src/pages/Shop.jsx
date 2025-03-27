import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import '../shop.css'
const Shop = () => {
  const products = useSelector((state) => state.product);



  return (
    <div className="container mx-auto py-4 px-2 px-md-16 px-lg-24">
      <br />
      <h2 className="text-2xl font-weight-bold mb-6 d-flex justify-content-center">Shop</h2>
      <br />
      <div className="row g-4">
        {products.products.map((product) => (
          <div
            key={product.id}
            className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center"
          >
            <div className="product-card-wrapper">
              <ProductCard product={product} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
