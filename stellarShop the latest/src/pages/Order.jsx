import React from 'react';
import { useNavigate } from 'react-router-dom';

const Order = ({ order }) => {
  const navigate = useNavigate();

  if (!order) {
    return <p className="text-center text-muted">No order found. Please place an order first.</p>;
  }

  return (
    <div className="container max-w-2xl mx-auto p-4 bg-white shadow-lg rounded">
      <h2 className="h2 text-success mb-4">Thank you for your Order</h2>
      <p className="text-muted mb-6">Your order has been placed successfully, and you will receive an email confirmation.</p>
      <div className="border-top pt-4">
        <h3 className="h5 font-weight-semibold mb-2">Order Summary</h3>
        <p className="font-weight-medium">Order Number: {order.orderNumber}</p>
        <div className="mt-4">
          <h4 className="h5 font-weight-semibold">Shipping Information</h4>
          <p className="text-muted">{order.shipingInformation.address}</p>
          <p className="text-muted">{order.shipingInformation.city}</p>
          <p className="text-muted">{order.shipingInformation.zip}</p>
        </div>
        <div className="mt-4">
          <h4 className="h5 font-weight-semibold">Products Ordered</h4>
          {order.products.map((product) => (
            <div className="border p-3 rounded mt-2" key={product.name}>
              <p className="font-weight-medium">{product.name} (x{product.quantity})</p>
              <p className="text-success font-weight-semibold">{(product.price * product.quantity).toFixed(2)} $</p>
            </div>
          ))}
        </div>
        <div className="mt-6 d-flex justify-content-between align-items-center p-3 bg-light rounded">
          <span className="font-weight-semibold h6">Total Price</span>
          <span className="h4 font-weight-bold text-success">{order.totalPrice.toFixed(2)} $</span>
        </div>
        <div className="mt-6 d-flex space-x-4">
          <button className="btn btn-primary px-4 py-2">Order Tracking</button>
          <button
            className="btn btn-secondary px-4 py-2"
            onClick={() => navigate('/shop')}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;
