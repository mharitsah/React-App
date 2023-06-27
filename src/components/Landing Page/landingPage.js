import React, { useEffect } from 'react';
import './landingPage.css';

const LandingPage = () => {
  useEffect(() => {
    // Scroll smooth behavior
    const navigationLinks = document.querySelectorAll('.navigation a');

    navigationLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
      });
    });
  }, []);

  return (
    <div className="landing-page">
      <header>
        <nav className="shop-nav">
          <a href="#home" className="logo">E-Commerce</a>
          <ul className="navigation">
            <li><a href="#home">Home</a></li>
            <li><a href="#shop">Shop</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="home" className="hero">
          <h1>Welcome to E-Commerce</h1>
          <p>Your one-stop shop for all your shopping needs</p>
          <a href="#shop" className="cta-button">Shop Now</a>
        </section>
        <section id="shop" className="features">
          <div className="feature">
            <i className="fa fa-shopping-cart"></i>
            <h2>Convenient Shopping</h2>
            <p>Shop from the comfort of your home</p>
          </div>
          <div className="feature">
            <i className="fa fa-truck"></i>
            <h2>Fast Delivery</h2>
            <p>Get your products delivered in no time</p>
          </div>
          <div className="feature">
            <i className="fa fa-heart"></i>
            <h2>High-Quality Products</h2>
            <p>Discover a wide range of top-quality products</p>
          </div>
        </section>
        <section id="about" className="about">
          <h2>About Us</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </section>
        <section id="contact" className="contact">
          <h2>Contact Us</h2>
          <form>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <textarea placeholder="Message"></textarea>
            <button type="submit">Send</button>
          </form>
        </section>
      </main>
      <footer className='bottom-footer'>
        <p>&copy; 2023 E-Commerce. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
