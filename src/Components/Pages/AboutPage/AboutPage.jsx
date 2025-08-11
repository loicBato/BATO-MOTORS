import React from 'react';
import { Users, Target, CheckCircle } from 'lucide-react';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1 className="about-title">À Propos de BatoMotors</h1>
        <p className="about-subtitle">Votre partenaire de confiance pour les pièces détachées automobiles.</p>
      </div>

      <div className="about-section-story">
        <div className="about-story-image">
          <img src="https://picsum.photos/seed/team/600/400" alt="Our Team" className="about-image" />
        </div>
        <div className="about-story-content">
          <h2 className="about-section-title">
            <Users className="about-icon" /> Notre Histoire
          </h2>
          <p className="about-text">
            Fondée il y a plus d'une décennie par une équipe de passionnés de mécanique, AutoParts a commencé comme un petit magasin local. Notre objectif était simple : fournir des pièces de qualité à des prix justes, avec un service client exceptionnel. Aujourd'hui, nous sommes fiers de servir des milliers de clients à travers le pays, tout en conservant les valeurs familiales qui ont fait notre succès.
          </p>
        </div>
      </div>

      <div className="about-section-values">
        <h2 className="about-section-title">
          <Target className="about-icon" /> Nos Valeurs & Expertise
        </h2>
        <p className="about-text-centered">
          Notre expertise ne se limite pas à la vente. Nous sommes des techniciens, des conseillers, des passionnés. Nous croyons en la transparence, la qualité et la satisfaction client. Chaque pièce de notre catalogue est sélectionnée avec soin pour répondre aux standards les plus exigeants.
        </p>
      </div>

      <div className="about-section-choose">
        <h2 className="about-section-title-centered">Pourquoi Nous Choisir ?</h2>
        <div className="about-choose-grid">
          <div className="about-choose-card">
            <CheckCircle className="about-icon-check" />
            <h3 className="about-card-title">Expertise Technique</h3>
            <p className="about-card-text">Notre équipe est composée de professionnels prêts à vous conseiller.</p>
          </div>
          <div className="about-choose-card">
            <CheckCircle className="about-icon-check" />
            <h3 className="about-card-title">Garantie Qualité</h3>
            <p className="about-card-text">Toutes nos pièces sont testées et garanties pour votre tranquillité d'esprit.</p>
          </div>
          <div className="about-choose-card">
            <CheckCircle className="about-icon-check" />
            <h3 className="about-card-title">Disponibilité Immédiate</h3>
            <p className="about-card-text">Un large stock pour répondre à vos besoins urgents.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;