import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/cartSlice"; // Replace with product actions
import 'bootstrap/dist/css/bootstrap.min.css';
const Products = () => {
  const products = useSelector((state) => state.product.products);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>📦 Manage Products</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>${product.price}</td>
              <td>
                <button className="btn btn-warning btn-sm cursor-pointer">✏️ Edit</button>
                <button
                  className="btn btn-danger btn-sm ms-2 cursor-pointer"
                  onClick={() => {
                    dispatch(removeFromCart(product.id));
                    alert(`${product.name} has been removed from the cart`);
                  }}
                >
                  🗑️ Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
