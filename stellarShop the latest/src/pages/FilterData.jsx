import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../components/ProductCard';

const FilterDAta = () => {
  const filterProducts = useSelector((state) => state.product.filteredData);

  return (
    <div  className="container mx-auto py-4 px-2 px-md-16 px-lg-24">
      {filterProducts.length > 0 ? (
        <div>
          <h2 className="text-2xl font-weight-bold mb-6 d-flex justify-content-center">
            Shop
          </h2>
          <div className="row g-4">
            {filterProducts.map((product) => (
              <div key={product.id} className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
                <div className="product-card-wrapper">
                  <ProductCard product={product} />
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p>No products found!</p>
      )}
    </div>
  );
};

export default FilterDAta;
