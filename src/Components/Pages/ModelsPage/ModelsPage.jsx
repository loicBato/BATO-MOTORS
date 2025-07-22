import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Car } from 'lucide-react';
import './ModelsPage.css';
import { getBrandById } from '../../Services/dataService';
import BreadCrumb from '../../Common/BreadCrumb/BreadCrumb';

const ModelsPage = () => {
  const { brandId } = useParams();
  const [brand, setBrand] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBrand = async () => {
      if (brandId) {
        setLoading(true);
        const data = await getBrandById(brandId);
        setBrand(data || null);
        setLoading(false);
      }
    };
    fetchBrand();
  }, [brandId]);

  if (loading) {
    return <div className="models-loading">Chargement des modèles...</div>;
  }

  if (!brand) {
    return <div className="models-error">Marque introuvable.</div>;
  }

  const breadcrumbItems = [
    { label: 'Accueil', href: '/' },
    { label: 'Nos Marques', href: '/brands' },
    { label: brand.name },
  ];

  return (
    <div className="models-container">
      <BreadCrumb items={breadcrumbItems} />
      <div className="models-header">
        <img src={brand.logoUrl} alt={`${brand.name} logo`} className="models-logo" />
        <h1 className="models-title">Modèles {brand.name}</h1>
      </div>

      {brand.models.length > 0 ? (
        <div className="models-grid">
          {brand.models.map(model => (
            <Link key={model.id} to={`/brands/${brand.id}/models/${model.id}`} className="model-card-link">
              <div className="model-card">
                <Car className="model-icon" />
                <div className="model-content">
                  <h3 className="model-name">{model.name}</h3>
                  <p className="model-description">Voir les pièces</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="models-empty">
          <h2 className="models-empty-title">Aucun modèle disponible pour cette marque pour le moment.</h2>
          <p className="models-empty-description">Nous mettons à jour notre catalogue régulièrement. Revenez bientôt !</p>
        </div>
      )}
    </div>
  );
};

export default ModelsPage;