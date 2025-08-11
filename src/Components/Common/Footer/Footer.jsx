import React from 'react';
import { NavLink } from 'react-router-dom';
import { Wrench, Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Company Info */}
          <div className="footer-section">
            <div className="footer-logo">
              <Wrench className="footer-icon-logo" />
              <span className="footer-title">BATO-MOTORS</span>
            </div>
            <p className="footer-description">
              Votre spécialiste en pièces détachées. Qualité, fiabilité et disponibilité au meilleur prix.
            </p>
            <div className="footer-social">
              <a href="#" className="footer-social-link"><Facebook size={20} /></a>
              <a href="#" className="footer-social-link"><Twitter size={20} /></a>
              <a href="#" className="footer-social-link"><Instagram size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="footer-heading">Liens Rapides</h3>
            <ul className="footer-list">
              <li><NavLink to="/" className="footer-link">Accueil</NavLink></li>
              <li><NavLink to="/brands" className="footer-link">Nos Marques</NavLink></li>
              <li><NavLink to="/about" className="footer-link">À propos</NavLink></li>
              <li><NavLink to="/contact" className="footer-link">Contact</NavLink></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h3 className="footer-heading">Contact</h3>
            <ul className="footer-list">
              <li className="footer-contact-item">
                <MapPin size={16} />
                <span>Lomé-TOGO</span>
              </li>
              <li className="footer-contact-item">
                <Phone size={16} />
                <span>+228 96 70 15 72</span>
              </li>
              <li className="footer-contact-item">
                <Mail size={16} />
                <span>batomotors@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div className="footer-section">
            <h3 className="footer-heading">Horaires d'Ouverture</h3>
            <ul className="footer-list">
              <li className="footer-contact-item">Lundi - Vendredi: 8h00 - 19h00</li>
              <li className="footer-contact-item">Samedi: 9h00 - 15h00</li>
              <li className="footer-contact-item">Dimanche: Fermé</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>By BATO LAB © {new Date().getFullYear()} Bato-Motors. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;