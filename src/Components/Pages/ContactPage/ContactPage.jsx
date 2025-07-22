import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import './ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Envoi en cours...');
    // Simulate form submission
    setTimeout(() => {
      setStatus('Votre message a été envoyé avec succès !');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1 className="contact-title">Contactez-nous</h1>
        <p className="contact-subtitle">Une question ? Un conseil ? N'hésitez pas à nous joindre.</p>
      </div>

      <div className="contact-grid">
        {/* Contact Form */}
        <div className="contact-form-container">
          <h2 className="contact-section-title">Envoyer un message</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name" className="form-label">Nom</label>
              <input
                type="text"
                name="name"
                id="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject" className="form-label">Sujet</label>
              <input
                type="text"
                name="subject"
                id="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                name="message"
                id="message"
                rows={4}
                required
                value={formData.message}
                onChange={handleChange}
                className="form-textarea"
              ></textarea>
            </div>
            <div className="form-group">
              <button type="submit" className="form-submit">Envoyer</button>
            </div>
            {status && <p className="form-status">{status}</p>}
          </form>
        </div>

        {/* Contact Info & Map */}
        <div className="contact-info-container">
          <div className="contact-info">
            <h2 className="contact-section-title">Nos Coordonnées</h2>
            <p className="contact-info-item">
              <MapPin className="contact-icon" /> Lomé-TOGO
            </p>
            <p className="contact-info-item">
              <Phone className="contact-icon" /> +228 96 70 15 72
            </p>
            <p className="contact-info-item">
              <Mail className="contact-icon" /> batomotors@gmail.com
            </p>
            <p className="contact-info-item">
              <Clock className="contact-icon" /> Lundi - Samedi: 8h00 - 19h00
            </p>
          </div>
          <div className="contact-map">
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=1.15393%2C6.22632%2C1.15993%2C6.23032&layer=mapnik&marker=6.2283219%2C1.15693"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;