import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Wrench, ShieldCheck, Truck, Star, Car, Search, FileText } from 'lucide-react';
import './HomePage.css';
import { getBrands } from '../../Services/dataService';
import image from '../../../assets/image.jpeg';

const Hero = () => (
  <div className="hero-container">
    <div className="hero-image-wrapper">
      <img src={image} alt="Car Engine Parts" className="hero-image" />
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="hero-title">
            Trouvez la bonne pièce, pour le bon véhicule, au bon moment.
          </h1>
          <p className="hero-description">
            Spécialistes des pièces détachées depuis plus de 10 ans, nous vous proposons un vaste catalogue de pièces pour toutes les marques de véhicules. Notre mission ? Vous garantir qualité, fiabilité et disponibilité.
          </p>
          <Link to="/brands" className="hero-button">
            Explorer nos pièces 🔧
          </Link>
        </div>
      </div>
    </div>
  </div>
);

const FeatureCard = ({ icon, title, description }) => (
  <div className="feature-card">
    <div className="feature-icon">{icon}</div>
    <h3 className="feature-title">{title}</h3>
    <p className="feature-description">{description}</p>
  </div>
);

const FeaturedBrands = ({ brands }) => {
  if (brands.length === 0) return null;

  return (
    <div className="featured-brands">
      <h2 className="featured-brands-title">Nos Marques Principales</h2>
      <div className="featured-brands-grid">
        {brands.slice(0, 6).map(brand => (
          <Link key={brand.id} to={`/brands/${brand.id}`} title={brand.name} className="featured-brand-link">
            <img src={brand.logoUrl} alt={brand.name} className="featured-brand-logo" />
          </Link>
        ))}
      </div>
    </div>
  );
};

const HowItWorks = () => (
  <div className="how-it-works">
    <h2 className="how-it-works-title">Trouvez votre pièce en 3 étapes faciles</h2>
    <div className="how-it-works-grid">
      <div className="how-it-works-item">
        <div className="how-it-works-icon">
          <Car size={32} />
        </div>
        <h3 className="how-it-works-item-title">1. Choisissez votre véhicule</h3>
        <p className="how-it-works-item-description">Sélectionnez la marque et le modèle de votre voiture pour voir les pièces compatibles.</p>
      </div>
      <div className="how-it-works-item">
        <div className="how-it-works-icon">
          <Search size={32} />
        </div>
        <h3 className="how-it-works-item-title">2. Trouvez votre pièce</h3>
        <p className="how-it-works-item-description">Naviguez dans notre catalogue ou utilisez la recherche pour trouver exactement ce dont vous avez besoin.</p>
      </div>
      <div className="how-it-works-item">
        <div className="how-it-works-icon">
          <FileText size={32} />
        </div>
        <h3 className="how-it-works-item-title">3. Demandez un devis</h3>
        <p className="how-it-works-item-description">Obtenez un devis rapidement, avec ou sans photo de votre pièce actuelle.</p>
      </div>
    </div>
  </div>
);

const FeaturedParts = ({ parts, brands }) => {
  if (parts.length === 0) return null;

  const findPartOrigin = (partId) => {
    for (const brand of brands) {
      for (const model of brand.models) {
        const foundPart = model.parts.find(p => p.id === partId);
        if (foundPart) {
          return { brandId: brand.id, modelId: model.id };
        }
      }
    }
    return null;
  };

  return (
    <div className="featured-parts">
      <h2 className="featured-parts-title">Nos Pièces Détachées en Vedette</h2>
      <div className="featured-parts-grid">
        {parts.map(part => {
          const origin = findPartOrigin(part.id);
          return (
            <div key={part.id} className="featured-part-card">
              <img src={part.imageUrl} alt={part.name} className="featured-part-image" />
              <div className="featured-part-content">
                <span className="featured-part-category">{part.category}</span>
                <h3 className="featured-part-name">{part.name}</h3>
                <div className="featured-part-footer">
                  <span className="featured-part-price">{part.price}</span>
                  {origin && (
                    <Link to={`/brands/${origin.brandId}/models/${origin.modelId}`} className="featured-part-link">
                      Voir plus
                    </Link>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Service client incroyable et pièces de haute qualité. J'ai trouvé exactement ce que je cherchais pour ma Clio. Je recommande vivement !",
      author: "Abalo M.",
      rating: 5,
    },
    {
      quote: "Le site est très facile à utiliser. J'ai pu commander mon radiateur pour Captur et le recevoir en 48h. Parfait !",
      author: "Sophie L.",
      rating: 5,
    },
    {
      quote: "Le meilleur site, avec une assistance reactive chaleureuse. Parfait !",
      author: "Joseph T.",
      rating: 5,
    },
  ];

  return (
    <div className="testimonials">
      <h2 className="testimonials-title">Ce que nos clients disent</h2>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <div className="testimonial-stars">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="testimonial-star" size={20} />
              ))}
            </div>
            <p className="testimonial-quote">"{testimonial.quote}"</p>
            <p className="testimonial-author">- {testimonial.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const FinalCTA = () => (
  <div className="final-cta">
    <h2 className="final-cta-title">Besoin d'aide pour trouver une pièce ?</h2>
    <p className="final-cta-description">Notre équipe d'experts est là pour vous aider. Contactez-nous ou faites une demande de devis détaillée.</p>
    <div className="final-cta-buttons">
      <Link to="/quote" className="final-cta-button primary">Demander un Devis</Link>
      <Link to="/contact" className="final-cta-button secondary">Nous Contacter</Link>
    </div>
  </div>
);

const HomePage = () => {
  const [brands, setBrands] = useState([]);
  const [featuredParts, setFeaturedParts] = useState([]);

  useEffect(() => {
    const fetchHomePageData = async () => {
      const allBrands = await getBrands();
      setBrands(allBrands);

      const parts = [];
      for (const brand of allBrands) {
        if (parts.length >= 4) break;
        for (const model of brand.models) {
          if (parts.length >= 4) break;
          if (model.parts.length > 0) {
            parts.push(model.parts[0]);
          }
        }
      }
      setFeaturedParts(parts);
    };
    fetchHomePageData();
  }, []);

  return (
    <>
     <Hero />
    <div className="home-container">
     
      <div className="features-grid">
        <FeatureCard
          icon={<Wrench className="feature-icon" />}
          title="Vaste Catalogue"
          description="Des milliers de références pour toutes les marques et tous les modèles."
        />
        <FeatureCard
          icon={<ShieldCheck className="feature-icon" />}
          title="Qualité Garantie"
          description="Pièces d'origine ou de qualité équivalente, testées et approuvées."
        />
        <FeatureCard
          icon={<Truck className="feature-icon" />}
          title="Livraison Rapide"
          description="Recevez vos pièces rapidement chez vous ou chez votre garagiste."
        />
      </div>
      <FeaturedBrands brands={brands} />
      <HowItWorks />
      <FeaturedParts parts={featuredParts} brands={brands} />
      <Testimonials />
      <FinalCTA />
    </div>
    </>
  );
};

export default HomePage;