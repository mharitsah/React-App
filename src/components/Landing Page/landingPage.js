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
          <a href="#shop" className="cta-button" style={{ marginTop: '10px' }}>Shop Now</a>
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
          <h2 style={{marginBottom: '10px'}}>About Us</h2>
          <p align="justify">
  Selamat datang di E-Commerce, portal belanja online terkemuka yang hadir untuk memenuhi segala kebutuhan belanja Anda. Kami berkomitmen untuk memberikan pengalaman belanja online yang luar biasa dengan akses mudah ke berbagai produk berkualitas tinggi dari berbagai kategori. Sejak awal, misi kami adalah memberikan layanan yang nyaman, aman, dan efisien, sehingga Anda dapat menikmati kemudahan berbelanja dari kenyamanan rumah Anda.
  <br></br>
  <br></br>
  Kami bangga menjadi bagian dari revolusi digital yang telah mengubah cara kita berbelanja. Dengan platform E-Commerce kami, Anda dapat menjelajahi berbagai produk, membandingkan harga, dan menemukan penawaran terbaik, semuanya dengan beberapa klik saja. Kami bekerja sama dengan berbagai merek terkemuka dan pedagang terpercaya untuk memberikan produk berkualitas yang memenuhi kebutuhan Anda.
  <br></br>
  <br></br>
  Kami selalu mendengarkan masukan dan umpan balik dari pelanggan kami, dan kami terus berusaha meningkatkan layanan kami agar lebih baik setiap hari. Keamanan dan privasi Anda adalah prioritas utama kami, dan kami melakukan segala upaya untuk melindungi data Anda dan transaksi Anda.
  <br></br>
  <br></br>
  Terima kasih telah memilih E-Commerce sebagai mitra belanja online Anda. Kami berkomitmen untuk terus memberikan pengalaman berbelanja yang luar biasa dan berharap dapat melayani Anda dengan baik dalam setiap langkah perjalanan belanja Anda. Kami menantikan kerja sama yang sukses dengan Anda.
</p>

        </section>
        <section id="contact" className="contact">
          <h2>Contact Us</h2>
          <form style={{ marginTop: '15px' }}>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <textarea placeholder="Message"></textarea>
            <button type="submit" style={{ marginTop: '10px' }}>Send</button>
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
