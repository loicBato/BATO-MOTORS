import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Wrench, Menu, X } from 'lucide-react';
import './Header.css';

const NavItem = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `nav-item ${isActive ? 'nav-item-active' : ''}`
      }
    >
      {children}
    </NavLink>
  );
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-content">
          <div className="header-logo">
            <NavLink to="/" className="header-logo-link">
              <Wrench className="header-icon-logo" />
              <span className="header-title">BATO-MOTORS</span>
            </NavLink>
          </div>
          <div className="header-nav-desktop">
            <div className="header-nav-list">
              <NavItem to="/">Accueil</NavItem>
              <NavItem to="/brands">Nos Marques</NavItem>
              <NavItem to="/about">À propos</NavItem>
              <NavItem to="/contact">Contact</NavItem>
              <NavLink
                to="/quote"
                className="header-quote-button"
              >
                Demande de Devis
              </NavLink>
            </div>
          </div>
          <div className="header-nav-mobile">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="header-menu-button"
            >
              {isOpen ? <X className="header-icon-menu" /> : <Menu className="header-icon-menu" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="header-mobile-menu">
          <div className="header-mobile-menu-content">
            <NavItem to="/">Accueil</NavItem>
            <NavItem to="/brands">Nos Marques</NavItem>
            <NavItem to="/about">À propos</NavItem>
            <NavItem to="/contact">Contact</NavItem>
            <NavLink
              to="/quote"
              className="header-mobile-quote-button"
            >
              Demande de Devis
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;