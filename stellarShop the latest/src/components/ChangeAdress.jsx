import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ChangeAdress = ({ setAddress, setIsModelOpen }) => {
  const [newAddress, setNewAddress] = useState("");

  const onClose = () => {
    setAddress(newAddress);
    setIsModelOpen(false);
  };

  return (
    <div className="p-3">
      <input
        type="text"
        placeholder="Enter new address"
        className="form-control mb-3"
        onChange={(e) => setNewAddress(e.target.value)}
      />
      <div className="d-flex justify-content-end">
        <button
          className="btn btn-secondary me-2"
          onClick={() => setIsModelOpen(false)}
        >
          Cancel
        </button>
        <button className="btn btn-primary" onClick={onClose}>
          Save Address
        </button>
      </div>
    </div>
  );
};

export default ChangeAdress;
