import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './BrandsPage.css';
import { getBrands } from '../../Services/dataService';
import BreadCrumb from '../../Common/BreadCrumb/BreadCrumb';

const BrandCard = ({ brand }) => (
  <Link to={`/brands/${brand.id}`} className="brand-card-link">
    <div className="brand-card">
      <img src={brand.logoUrl} alt={`${brand.name} logo`} className="brand-logo" />
      <h3 className="brand-name">{brand.name}</h3>
    </div>
  </Link>
);

const BrandsPage = () => {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBrands = async () => {
      setLoading(true);
      const data = await getBrands();
      setBrands(data);
      setLoading(false);
    };
    fetchBrands();
  }, []);

  const breadcrumbItems = [{ label: 'Accueil', href: '/' }, { label: 'Nos Marques' }];

  return (
    <div className="brands-container">
      <BreadCrumb items={breadcrumbItems} />
      <div className="brands-header">
        <h1 className="brands-title">Nos Marques & Modèles</h1>
        <p className="brands-subtitle">
          Choisissez votre marque parmi les plus grandes du marché : Renault, Peugeot, Toyota, Mercedes, BMW, Ford, et bien d'autres.
        </p>
      </div>
      {loading ? (
        <div className="brands-grid">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="brand-placeholder"></div>
          ))}
        </div>
      ) : (
        <div className="brands-grid">
          {brands.map(brand => (
            <BrandCard key={brand.id} brand={brand} />
          ))}
        </div>
      )}
    </div>
  );
};

export default BrandsPage;