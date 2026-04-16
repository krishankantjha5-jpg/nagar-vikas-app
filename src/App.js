import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="d-flex flex-column min-vh-100" style={{ backgroundColor: "#E6E1C5" }}>
      
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center p-3 border-bottom" style={{ backgroundColor: "#D4CB92" }}>
        <div className="d-flex align-items-center">
          <img
            src="https://via.placeholder.com/50"
            alt="Logo"
            className="me-2"
          />
          <h5 className="mb-0" style={{ color: "#395C6B" }}>
            Nagar Vikas Samiti
          </h5>
        </div>

        <img
          src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg"
          alt="Indian Flag"
          style={{ width: "50px" }}
        />
      </div>

      {/* Navbar */}
      <nav style={{ backgroundColor: "#395C6B" }}>
        <div className="d-flex justify-content-center gap-5 p-3">
          <a className="text-white text-decoration-none" href="#home">Home</a>
          <a className="text-white text-decoration-none" href="#leader">Our Leader</a>
          <a className="text-white text-decoration-none" href="#people">Our People</a>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mt-4 flex-grow-1">
        <section id="home">
          <h2>Home Page</h2>
          <p>Welcome to Nagar Vikas Samiti NGO.</p>
        </section>

        <section id="leader" className="mt-5">
          <h2>Our Leader</h2>
          <p>Details about leadership.</p>
        </section>

        <section id="people" className="mt-5">
          <h2>Our People</h2>
          <p>Details about members.</p>
        </section>
      </div>

      {/* Footer */}
      <footer className="text-white text-center p-3" style={{ backgroundColor: "#395C6B" }}>
        <p>Follow us</p>

        <a href="#" className="text-white me-3">Facebook</a>
        <a href="#" className="text-white me-3">Instagram</a>

        <div className="mt-2">
          <a href="tel:+911234567890" className="text-white d-block">
            +91 1234567890
          </a>
          <a href="mailto:info@nagarvikas.org" className="text-white d-block">
            info@nagarvikas.org
          </a>
        </div>
      </footer>

    </div>
  );
}