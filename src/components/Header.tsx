import React from 'react';
import { Search } from 'lucide-react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <>
      <div className="testing-banner">
        This is a testing environment - not for external use
        <div className="header-right">
          <select className="language-select">
            <option>English</option>
          </select>
          <span className="expert-chat">Expert Chat</span>
        </div>
      </div>
      <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="logo-section">
              <div className="university-logo">
                <div className="logo-icon">
                  <div className="building-icon">
                    <div className="columns">
                      <div className="column"></div>
                      <div className="column"></div>
                      <div className="column"></div>
                    </div>
                    <div className="roof"></div>
                  </div>
                </div>
                <div className="university-text">
                  <div className="university-name">BENJAMIN</div>
                  <div className="university-name">FRANKLIN</div>
                  <div className="university-subtitle">UNIVERSITY</div>
                </div>
              </div>
            </div>
            <div className="header-actions">
              <Search className="search-icon" size={24} />
              <button className="login-btn">Log In</button>
              <button className="signup-btn">Sign Up</button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;