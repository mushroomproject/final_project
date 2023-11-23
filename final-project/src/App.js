import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Farmer from './pages/Farmer';
import News from './pages/News';
import Expert from './pages/Expert';
import Product from './pages/Product';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/farmer" element={<Farmer />} />
          <Route path="/news" element={<News />} />
          <Route path="/product" element={<Product />} />
          <Route path='/expert' element={<Expert />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
