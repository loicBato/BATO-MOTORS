import React, { useEffect, useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import './PartsPage.css';
import { getBrandById, getModelById, getPartsByModelId } from '../../Services/dataService';
import BreadCrumb from '../../Common/BreadCrumb/BreadCrumb';

const PartCard = ({ part }) => (
  <div className="part-card">
    <img src={part.imageUrl} alt={part.name} className="part-image" />
    <div className="part-content">
      <span className="part-category">{part.category}</span>
      <h3 className="part-name">{part.name}</h3>
      <p className="part-description">{part.description}</p>
      <div className="part-price">{part.price}</div>
    </div>
  </div>
);

const PartsPage = () => {
  const { brandId, modelId } = useParams();
  const [parts, setParts] = useState([]);
  const [brand, setBrand] = useState(null);
  const [model, setModel] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      if (brandId && modelId) {
        setLoading(true);
        const [brandData, modelData, partsData] = await Promise.all([
          getBrandById(brandId),
          getModelById(brandId, modelId),
          getPartsByModelId(brandId, modelId),
        ]);
        setBrand(brandData || null);
        setModel(modelData || null);
        setParts(partsData);
        setLoading(false);
      }
    };
    fetchData();
  }, [brandId, modelId]);

  const filteredParts = useMemo(
    () =>
      parts.filter(
        part =>
          part.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          part.category.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    [parts, searchTerm]
  );

  if (loading) {
    return <div className="parts-loading">Chargement des pièces...</div>;
  }

  if (!brand || !model) {
    return <div className="parts-error">Modèle ou marque introuvable.</div>;
  }

  const breadcrumbItems = [
    { label: 'Accueil', href: '/' },
    { label: 'Nos Marques', href: '/brands' },
    { label: brand.name, href: `/brands/${brand.id}` },
    { label: model.name },
  ];

  return (
    <div className="parts-container">
      <BreadCrumb items={breadcrumbItems} />
      <h1 className="parts-title">Pièces pour {brand.name} {model.name}</h1>
      <p className="parts-subtitle">
        Toutes nos pièces sont testées, garanties, et disponibles rapidement. Que vous recherchiez un disque de frein, une courroie de distribution, un radiateur, ou un capteur ABS, vous êtes au bon endroit.
      </p>
      <div className="parts-search">
        <input
          type="text"
          placeholder="Rechercher une pièce (ex: frein, moteur...)"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="parts-search-input"
        />
      </div>
      {filteredParts.length > 0 ? (
        <div className="parts-grid">
          {filteredParts.map(part => (
            <PartCard key={part.id} part={part} />
          ))}
        </div>
      ) : (
        <div className="parts-empty">
          <h2 className="parts-empty-title">Aucune pièce trouvée pour votre recherche.</h2>
          <p className="parts-empty-description">Essayez un autre terme ou contactez-nous pour une demande spécifique.</p>
        </div>
      )}
    </div>
  );
};

export default PartsPage;