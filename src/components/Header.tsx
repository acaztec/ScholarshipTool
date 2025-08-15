import React from 'react';
import { Search, Menu, User, Bell } from 'lucide-react';
import './Header.css';

interface HeaderProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

const Header: React.FC<HeaderProps> = ({ searchTerm, onSearchChange }) => {
  return (
    <header className="header">
      <div className="header-top">
        <div className="container">
          <div className="header-top-content">
            <div className="university-info">
              <h1 className="university-name">Bluefield University</h1>
              <span className="tagline">Excellence in Education</span>
            </div>
            <div className="header-actions">
              <button className="icon-button">
                <Bell size={20} />
              </button>
              <button className="icon-button">
                <User size={20} />
              </button>
              <button className="menu-button">
                <Menu size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="header-main">
        <div className="container">
          <nav className="main-nav">
            <ul className="nav-links">
              <li><a href="#" className="nav-link">Home</a></li>
              <li><a href="#" className="nav-link">Admissions</a></li>
              <li><a href="#" className="nav-link active">Financial Aid</a></li>
              <li><a href="#" className="nav-link">Academics</a></li>
              <li><a href="#" className="nav-link">Student Life</a></li>
              <li><a href="#" className="nav-link">About</a></li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="header-bottom">
        <div className="container">
          <div className="breadcrumb">
            <span>Home</span>
            <span className="separator">›</span>
            <span>Financial Aid</span>
            <span className="separator">›</span>
            <span className="current">Scholarships</span>
          </div>
          
          <div className="page-header">
            <h2 className="page-title">Available Scholarships</h2>
            <p className="page-description">
              Discover scholarship opportunities to help fund your education at Bluefield University
            </p>
          </div>

          <div className="search-section">
            <div className="search-container">
              <Search className="search-icon" size={20} />
              <input
                type="text"
                placeholder="Search scholarships by name or description..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                className="search-input"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;