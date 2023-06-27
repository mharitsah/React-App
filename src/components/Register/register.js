import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import './style.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [redirectToLogin, setRedirectToLogin] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (!username || !email || !password || !confirmPassword) {
      // if any required field is missing, display an error message
      console.error('Please fill out all required fields.');
      return;
    }

    if (password !== confirmPassword) {
      // if the passwords don't match, display an error message
      console.error('password tidak sesuai');
      return;
    }

    if(username){
      setUsername(username);
    }

    if(email){
      setEmail(email);
    }

    if(password){
      setEmail(password);
    }

    if(confirmPassword){
      setEmail(confirmPassword);
    }

    setRedirectToLogin(true);
  };

  if (redirectToLogin) {
    return <Redirect to="/" />;
  }


  return (
    <div className="register-container">
      <form onSubmit={handleSubmit}>
        <h2>Register</h2>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;