import React from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { mockData } from "../assets/mockData";
import '../shop.css'; // Import the same CSS file for consistency

const CategoryPage = () => {
  const { categoryName } = useParams(); // Get category from URL
  const products = mockData; // Get products safely

  // Filter products based on the selected category
  const filteredProducts = products.filter(
    (product) => product.category?.trim().toLowerCase() === categoryName.trim().toLowerCase()
  );

  console.log("Category from URL:", categoryName);
  console.log("All products:", products);
  console.log("Filtered Products:", filteredProducts);

  return (
    <div className="container mx-auto py-4 px-2 px-md-16 px-lg-24">
      <h2 className="text-2xl font-weight-bold mb-6 d-flex justify-content-center">
        {categoryName} Products
      </h2>
      <div className="row g-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center"
            >
              <div className="product-card-wrapper">
                <ProductCard product={product} />
              </div>
            </div>
          ))
        ) : (
          <p>No products found in this category.</p>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
