import React from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import '../shop.css';
import { mockData } from "../assets/mockData";

const CategoryFilterPage = () => {
  const { category } = useParams(); // Get the category parameter from the URL

  // Filter products by category (gender)
  const filteredProducts = mockData.filter(product => product.gender === category);

  return (
    <div className="container ">
      <h2 className="text-center mb-5 category-title">{category.charAt(0).toUpperCase() + category.slice(1)} Products</h2>

      {/* Product Grid Layout */}
      <div className="row g-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
              <div className="product-card-wrapper">
                <ProductCard product={product} />
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No products found for this category.</p>
        )}
      </div>
    </div>
  );
};

export default CategoryFilterPage;
