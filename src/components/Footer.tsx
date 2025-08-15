import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-section">
              <h3 className="footer-title">Bluefield University</h3>
              <p className="footer-description">
                Empowering students through quality education and comprehensive financial support.
                Your success is our mission.
              </p>
              <div className="social-links">
                <a href="#" className="social-link" aria-label="Facebook">
                  <Facebook size={20} />
                </a>
                <a href="#" className="social-link" aria-label="Twitter">
                  <Twitter size={20} />
                </a>
                <a href="#" className="social-link" aria-label="Instagram">
                  <Instagram size={20} />
                </a>
                <a href="#" className="social-link" aria-label="LinkedIn">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>

            <div className="footer-section">
              <h4 className="section-title">Quick Links</h4>
              <ul className="footer-links">
                <li><a href="#" className="footer-link">Apply for Scholarships</a></li>
                <li><a href="#" className="footer-link">Financial Aid Office</a></li>
                <li><a href="#" className="footer-link">Student Resources</a></li>
                <li><a href="#" className="footer-link">Academic Calendar</a></li>
                <li><a href="#" className="footer-link">Tuition & Fees</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4 className="section-title">Support</h4>
              <ul className="footer-links">
                <li><a href="#" className="footer-link">Contact Financial Aid</a></li>
                <li><a href="#" className="footer-link">FAQ</a></li>
                <li><a href="#" className="footer-link">Application Help</a></li>
                <li><a href="#" className="footer-link">Document Upload</a></li>
                <li><a href="#" className="footer-link">Office Hours</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4 className="section-title">Contact Info</h4>
              <div className="contact-info">
                <div className="contact-item">
                  <MapPin size={16} />
                  <span>123 University Drive<br />Bluefield, VA 24605</span>
                </div>
                <div className="contact-item">
                  <Phone size={16} />
                  <span>(555) 123-4567</span>
                </div>
                <div className="contact-item">
                  <Mail size={16} />
                  <span>financialaid@bfu.edu</span>
                </div>
              </div>
            </div>
          </div>

          <div className="newsletter-section">
            <div className="newsletter-content">
              <h4 className="newsletter-title">Stay Updated</h4>
              <p className="newsletter-description">
                Get notified about new scholarship opportunities and important deadlines.
              </p>
            </div>
            <div className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email address"
                className="newsletter-input"
              />
              <button className="newsletter-button">Subscribe</button>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p className="copyright">
              © 2024 Bluefield University. All rights reserved.
            </p>
            <div className="footer-bottom-links">
              <a href="#" className="bottom-link">Privacy Policy</a>
              <a href="#" className="bottom-link">Terms of Service</a>
              <a href="#" className="bottom-link">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;