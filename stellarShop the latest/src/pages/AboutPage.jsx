import { Users, ShoppingBag, ShieldCheck, Smile, Truck } from "lucide-react";
import iconman from '../assets/images/iconman.png';

export default function AboutPage({ openLogin }) {
  return (
    <div className="container py-5">
      {/* Hero Section */}
      <section className="text-center py-5">
        <h1 className="display-4 fw-bold text-dark">About Us</h1>
        <p className="lead text-muted mt-3">
          Welcome to <strong>StellarShop</strong>, your trusted destination for quality products and exceptional service.
        </p>
      </section>

      {/* Our Story */}
      <section className="py-5 bg-light rounded-3 text-center">
        <h2 className="h1 fw-bold text-dark">Our Story</h2>
        <p className="text-muted mt-4 mx-auto" style={{ maxWidth: "700px" }}>
          StellarShop started with a vision to provide top-notch products to customers worldwide.  
          Founded in 2025, our mission has always been to ensure a seamless shopping experience.  
          We believe in <strong>quality, customer satisfaction, and innovation</strong>.  
          Every product we sell is carefully selected to match our high standards.
        </p>
      </section>

      {/* Why Choose Us */}
      <section className="py-5">
        <h2 className="h1 fw-bold text-center text-dark">Why Choose Us?</h2>
        <div className="row mt-4">
          <div className="col-md-4">
            <div className="card text-center p-4 border-0 shadow">
              <ShieldCheck size={48} className="text-primary mx-auto" />
              <h3 className="h4 mt-3">Quality Guaranteed</h3>
              <p className="text-muted">Every product goes through strict quality checks before reaching you.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-center p-4 border-0 shadow">
              <Truck size={48} className="text-primary mx-auto" />
              <h3 className="h4 mt-3">Fast & Free Shipping</h3>
              <p className="text-muted">Enjoy quick and free delivery on all your orders, no hidden fees.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-center p-4 border-0 shadow">
              <Smile size={48} className="text-primary mx-auto" />
              <h3 className="h4 mt-3">Customer First</h3>
              <p className="text-muted">Our priority is <strong>your happiness</strong>—we offer hassle-free returns.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-5 bg-light rounded-3 text-center">
        <h2 className="h1 fw-bold text-dark">Meet Our Team</h2>
        <div className="row mt-4">
          {["John Doe", "Jane Smith", "Michael Brown"].map((name, index) => (
            <div className="col-md-4" key={index}>
              <div className="text-center">
                <img src={iconman} alt={name} className="rounded-circle shadow-sm" style={{ width: "150px", height: "150px", objectFit: "cover" }} />
                <h3 className="h5 mt-3">{name}</h3>
                <p className="text-muted">{index === 0 ? "Founder & CEO" : index === 1 ? "Operations Manager" : "Customer Support Lead"}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-5">
        <h2 className="h1 fw-bold text-center text-dark">What Our Customers Say</h2>
        <div className="row mt-4">
          <div className="col-md-6">
            <div className="card p-4 border-0 shadow">
              <p className="fst-italic text-muted">"Amazing quality! The products are just as described, and the customer service is outstanding!"</p>
              <h4 className="h6 mt-3">- Emily Johnson</h4>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card p-4 border-0 shadow">
              <p className="fst-italic text-muted">"Super fast shipping! I received my order in just two days. Highly recommended!"</p>
              <h4 className="h6 mt-3">- Mark Wilson</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-5 bg-primary text-white text-center rounded-3">
        <h2 className="h1 fw-bold">Join the StellarShop Family!</h2>
        <p className="mt-3 lead">Sign up for our newsletter and be the first to hear about new products and exclusive deals.</p>
        <button 
          className="btn btn-light text-primary mt-3 px-4 py-2 fw-semibold"
          onClick={openLogin}
        >
          Subscribe Now
        </button>
      </section>
    </div>
  );
}
