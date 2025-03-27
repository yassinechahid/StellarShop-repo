import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Modal = ({ isModelOpen, setIsModelOpen, children }) => {
  if (!isModelOpen) return null;

  return (
    <div
      className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-75 d-flex align-items-center justify-content-center "
      style={{ zIndex: 1000 }} // This ensures the modal will be above everything else
    >
      <div className="rounded p-4 position-relative w-100" style={{ maxWidth: "400px" }}>
        <button
          className="btn-close position-absolute top-0 end-0 m-4 z-3"
          onClick={() => setIsModelOpen(false)}
        ></button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
