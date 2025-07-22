import React from 'react';
import { NavLink } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import './BreadCrumb.css';

const BreadCrumb = ({ items, separator = <ChevronRight className="breadcrumb-separator" /> }) => {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      <ol className="breadcrumb-list">
        {items.map((item, index) => (
          <li key={index} className="breadcrumb-item">
            {index > 0 && separator}
            {item.href ? (
              <NavLink
                to={item.href}
                className={({ isActive }) =>
                  `breadcrumb-link${isActive ? ' breadcrumb-link-active' : ''}`
                }
              >
                {item.label}
              </NavLink>
            ) : (
              <span className="breadcrumb-current" aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default BreadCrumb;