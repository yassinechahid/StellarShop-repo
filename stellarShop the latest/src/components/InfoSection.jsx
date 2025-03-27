import React from "react";
import {
  FaHeadset,
  FaLock,
  FaMoneyBillWave,
  FaShippingFast,
  FaTag,
} from "react-icons/fa";

const InfoSection = () => {
  const infoItems = [
    {
      icon: <FaShippingFast className="fs-1 text-danger" />,
      title: "Free Shipping",
      description: "Get your orders delivered with no extra cost",
    },
    {
      icon: <FaHeadset className="fs-1 text-danger" />,
      title: "Support 24/7",
      description: "We are here to assist you anytime",
    },
    {
      icon: <FaMoneyBillWave className="fs-1 text-danger" />,
      title: "100% Money Back",
      description: "Full refund if you are not satisfied",
    },
    {
      icon: <FaLock className="fs-1 text-danger" />,
      title: "Payment Secure",
      description: "Your payment information is safe with us",
    },
    {
      icon: <FaTag className="fs-1 text-danger" />,
      title: "Discount",
      description: "Enjoy the best prices on our products",
    },
  ];

  return (
    <div className="bg-white py-5">
      <div className="container">
        <div
          id="info"
          className="row g-4 g-md-4 g-lg-5 d-flex justify-content-between"
        >
          {infoItems.map((item, index) => (
            <div
              key={index}
              className="col-12 col-md-5 col-lg-2 d-flex flex-column align-items-center text-center p-3 border rounded-3 shadow-sm"
              style={{ transition: "transform 0.1s, box-shadow 0.3s" }}
              onMouseOver={(e) => {
                // Apply hover effect only to the card
                e.currentTarget.style.transform = "scale(1.05)";
                
              }}
              onMouseOut={(e) => {
                // Reset hover effect
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              <div className="fs-1 text-danger">{item.icon}</div>
              <h3 className="mt-3 fs-5 fw-semibold">{item.title}</h3>
              <p className="mt-2 text-muted">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
