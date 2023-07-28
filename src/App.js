import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from './components/Login/login';
import Register from './components/Register/register';
import LandingPage from './components/Landing Page/landingPage';
import './App.css';


const App = () => {
  return (
<Router>
  <div className="header">
    <div className="logo">
      <Link to="/">E-Commerce</Link>
    </div>
    <nav>
      <ul>
        <li>
          <Link to="/LandingPage">Landing Page</Link>
        </li>
        <li>
          <Link to="/Login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        
      </ul>
    </nav>
  </div>
  <Switch>
    <Route path="/register">
      <Register />
    </Route>
    <Route path="/Login">
      <Login />
    </Route>
    <Route path="/">
      <LandingPage />
    </Route>
  </Switch>
</Router>
  );
};

export default App;
