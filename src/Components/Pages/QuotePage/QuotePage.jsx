import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Upload, Wrench, X, Loader2, Sparkles } from 'lucide-react';
import './QuotePage.css';
import { analyzePartImage, getBrands } from '../../Services/dataService';

const QuotePage = () => {
  const [brands, setBrands] = useState([]);
  const [models, setModels] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [partName, setPartName] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState('');
  const fileInputRef = useRef(null);

  useEffect(() => {
    const fetchInitialData = async () => {
      const brandsData = await getBrands();
      setBrands(brandsData);
    };
    fetchInitialData();
  }, []);

  const handleBrandChange = e => {
    const brandId = e.target.value;
    setSelectedBrand(brandId);
    setSelectedModel('');
    const brand = brands.find(b => b.id === brandId);
    setModels(brand ? brand.models : []);
  };

  const handleImageChange = e => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setImageFile(null);
    setImagePreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleImageAnalysis = useCallback(async () => {
    if (!imageFile || !selectedBrand || !selectedModel) {
      setStatus('Veuillez sélectionner une marque, un modèle et une image.');
      return;
    }

    setIsLoading(true);
    setStatus("Analyse de l'image par l'IA...");

    const reader = new FileReader();
    reader.readAsDataURL(imageFile);
    reader.onload = async event => {
      const base64String = event.target?.result?.split(',')[1];
      if (base64String) {
        const brandName = brands.find(b => b.id === selectedBrand)?.name || '';
        const modelName = models.find(m => m.id === selectedModel)?.name || '';
        const identifiedPart = await analyzePartImage(base64String, imageFile.type, brandName, modelName);
        if (identifiedPart) {
          setPartName(identifiedPart);
          setStatus("Pièce identifiée par l'IA !");
        } else {
          setStatus("L'IA n'a pas pu identifier la pièce. Veuillez la nommer manuellement.");
        }
      } else {
        setStatus("Erreur lors de la lecture de l'image.");
      }
      setIsLoading(false);
    };
    reader.onerror = () => {
      setIsLoading(false);
      setStatus('Erreur de lecture du fichier image.');
    };
  }, [imageFile, selectedBrand, selectedModel, brands, models]);

  const handleSubmit = e => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('Envoi de votre demande de devis...');
    setTimeout(() => {
      setStatus('Devis demandé avec succès ! Nous vous contacterons bientôt.');
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="quote-container">
      <div className="quote-header">
        <h1 className="quote-title">Demande de Devis</h1>
        <p className="quote-subtitle">
          Remplissez le formulaire ci-dessous. Pour une identification plus rapide, téléchargez une photo de la pièce recherchée.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="quote-form">
        <div className="quote-form-grid">
          <div className="quote-form-group">
            <label htmlFor="brand" className="quote-form-label">Marque du véhicule</label>
            <select id="brand" value={selectedBrand} onChange={handleBrandChange} required className="quote-form-select">
              <option value="">Sélectionner une marque</option>
              {brands.map(b => (
                <option key={b.id} value={b.id}>{b.name}</option>
              ))}
            </select>
          </div>
          <div className="quote-form-group">
            <label htmlFor="model" className="quote-form-label">Modèle du véhicule</label>
            <select
              id="model"
              value={selectedModel}
              onChange={e => setSelectedModel(e.target.value)}
              required
              disabled={!selectedBrand}
              className="quote-form-select"
            >
              <option value="">Sélectionner un modèle</option>
              {models.map(m => (
                <option key={m.id} value={m.id}>{m.name}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="quote-form-group">
          <label className="quote-form-label">Photo de la pièce (optionnel mais recommandé)</label>
          <div className="quote-upload-area">
            <div className="quote-upload-content">
              {imagePreview ? (
                <div className="quote-image-preview">
                  <img src={imagePreview} alt="Aperçu de la pièce" className="quote-image" />
                  <button onClick={removeImage} className="quote-remove-image">
                    <X size={16} />
                  </button>
                </div>
              ) : (
                <>
                  <Upload className="quote-upload-icon" />
                  <div className="quote-upload-text">
                    <label htmlFor="file-upload" className="quote-upload-label">
                      <span>Télécharger un fichier</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="quote-upload-input"
                        onChange={handleImageChange}
                        accept="image/*"
                        ref={fileInputRef}
                      />
                    </label>
                    <p className="quote-upload-subtext">ou glisser-déposer</p>
                  </div>
                  <p className="quote-upload-hint">PNG, JPG, GIF jusqu'à 10MB</p>
                </>
              )}
            </div>
          </div>
        </div>
        {imageFile && selectedBrand && selectedModel && (
          <div className="quote-analyze-button-container">
            <button
              type="button"
              onClick={handleImageAnalysis}
              disabled={isLoading}
              className="quote-analyze-button"
            >
              {isLoading && status.includes('Analyse') ? <Loader2 className="quote-spinner" size={20} /> : <Sparkles size={20} />}
              <span>Analyser l'image avec l'IA</span>
            </button>
          </div>
        )}
        <div className="quote-form-group">
          <label htmlFor="partName" className="quote-form-label">Nom de la pièce recherchée</label>
          <input
            type="text"
            id="partName"
            value={partName}
            onChange={e => setPartName(e.target.value)}
            required
            placeholder="Ex: Disque de frein avant"
            className="quote-form-input"
          />
        </div>
        <div className="quote-form-group">
          <label htmlFor="additionalInfo" className="quote-form-label">Informations complémentaires</label>
          <textarea
            id="additionalInfo"
            value={additionalInfo}
            onChange={e => setAdditionalInfo(e.target.value)}
            rows={3}
            placeholder="Numéro de série, année du véhicule, etc."
            className="quote-form-textarea"
          ></textarea>
        </div>
        <div className="quote-submit-container">
          <button type="submit" disabled={isLoading} className="quote-submit-button">
            {isLoading && !status.includes('Analyse') ? <Loader2 className="quote-spinner" size={24} /> : <Wrench size={24} />}
            Demander le devis
          </button>
        </div>
        {status && <p className="quote-status">{status}</p>}
      </form>
    </div>
  );
};

export default QuotePage;