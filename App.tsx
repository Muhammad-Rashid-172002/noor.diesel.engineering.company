
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Rentals from './pages/Rentals';
import SpareParts from './pages/SpareParts';
import Clients from './pages/Clients';
import WhyChooseUs from './pages/WhyChooseUs';
import Contact from './pages/Contact';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/rentals" element={<Rentals />} />
          <Route path="/spare-parts" element={<SpareParts />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/why-choose-us" element={<WhyChooseUs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
