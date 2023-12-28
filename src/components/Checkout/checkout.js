import React, { useState } from 'react';
import './checkout.css';

const Checkout = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleCheckout = () => {
    // Logika untuk menangani proses checkout
    console.log('Checkout:', { name, email, address });
  };

  return (
    <div className="checkout-container" style={{ marginTop: '4rem' }}>
      <h2 style={{ marginBottom: '1rem' }}>Checkout</h2>
      <form>
        <label>Name:</label>
        <input type="text" value={name} onChange={handleNameChange} />

        <label>Email:</label>
        <input type="email" value={email} onChange={handleEmailChange} />

        <label>Address:</label>
        <textarea value={address} onChange={handleAddressChange} />

        <button type="button" onClick={handleCheckout}>
          Process Checkout
        </button>
      </form>
    </div>
  );
};

export default Checkout;
