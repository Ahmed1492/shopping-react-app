import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ProductCategory } from './component/productCategory/ProductCategory';
import { HomePage } from './page/homePage/HomePage';
import { Product } from './component/product/Product';
import { NavBar } from './component/navbar/NavBar';
import { About } from './page/about/About';
import { Contact } from './page/contact/Contact';
import { Footer } from './component/Footer/Footer';
export default function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products/:category" element={<ProductCategory />} />
          <Route path="/product/:category/:id" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>

  );
}
