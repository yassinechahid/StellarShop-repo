import { useState } from "react";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setError("All fields are required.");
      return;
    }

    console.log("Form submitted:", formData);
    alert("Thank you! Your message has been sent.");
    
    // Clear form after submission
    setFormData({ name: "", email: "", message: "" });
    setError("");
  };

  return (
    <div className="container py-12">
      <h1 className="text-center display-4 mb-4">Contact Us</h1>
      <p className="text-center text-muted mb-4">
        Have questions? We’d love to hear from you! Get in touch with us through any of the methods below.
      </p>

      {/* Contact Info Section */}
      <div className="row">
        {/* Left - Contact Form */}
        <div className="col-md-6 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h2 className="h4 font-weight-semibold mb-4">Send us a message</h2>
              {error && <p className="text-danger mb-3">{error}</p>}

              <form onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="form-control"
                  />
                </div>
                <div className="form-group mb-3">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="form-control"
                  />
                </div>
                <div className="form-group mb-3">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    rows="5"
                    className="form-control"
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary w-100"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Right - Contact Details */}
        <div className="col-md-6">
          <div className="card bg-light shadow-sm">
            <div className="card-body">
              <h2 className="h4 font-weight-semibold mb-4">Our Contact Details</h2>
              <p className="text-muted mb-4">Feel free to reach us through these channels:</p>

              <div className="mb-4">
                <div className="d-flex align-items-center mb-3">
                  <Mail className="text-primary mr-3" size={24} />
                  <p className="mb-0">support@stellarshop.com</p>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <Phone className="text-primary mr-3" size={24} />
                  <p className="mb-0">+1 (234) 567-890</p>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <MapPin className="text-primary mr-3" size={24} />
                  <p className="mb-0">123 E-commerce St, Online City, 45678</p>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="h5 font-weight-semibold mb-3">Follow us on</h3>
                <div className="d-flex justify-content-start">
                  <a href="#" className="text-primary mr-3"><Facebook size={24} /></a>
                  <a href="#" className="text-primary mr-3"><Twitter size={24} /></a>
                  <a href="#" className="text-primary"><Instagram size={24} /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Google Map Embed */}
      <div className="mt-5">
        <h2 className="h4 font-weight-semibold text-center mb-4">Find Us Here</h2>
        <iframe
          className="w-100 rounded shadow-sm"
          style={{ height: "400px" }}
          src="https://www.google.com/maps/embed/v1/place?q=Eiffel+Tower,Paris&key=YOUR_GOOGLE_MAPS_API_KEY"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
