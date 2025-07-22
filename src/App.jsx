


import { HashRouter, Route, Routes } from 'react-router';
import './App.css';
import Header from './Components/Common/Header/Header';
import HomePage from './Components/Pages/HomePage/HomePage';
import AboutPage from './Components/Pages/AboutPage/AboutPage';
import BrandsPage from './Components/Pages/BrandsPage/BrandsPage';
import ModelsPage from './Components/Pages/ModelsPage/ModelsPage';
import PartsPage from './Components/Pages/PartsPage/PartsPage';
import ContactPage from './Components/Pages/ContactPage/ContactPage';
import QuotePage from './Components/Pages/QuotePage/QuotePage';
import Footer from './Components/Common/Footer/Footer';

const App = () => {
  return (
    <HashRouter>
      <div className="app-container">
        <Header />
        <main className="app-main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/brands" element={<BrandsPage />} />
            <Route path="/brands/:brandId" element={<ModelsPage />} />
            <Route path="/brands/:brandId/models/:modelId" element={<PartsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/quote" element={<QuotePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;