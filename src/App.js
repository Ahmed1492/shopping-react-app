import React from 'react';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import { ProductCategory } from './component/productCategory/ProductCategory';
import { HomePage } from './page/homePage/HomePage';
import { Product } from './component/product/Product';
import { NavBar } from './component/navbar/NavBar';
import { About } from './page/about/About';
import { Contact } from './page/contact/Contact';
import { Footer } from './component/Footer/Footer';
import { MyProvider } from './context/MyProvider';
import { NotFound } from './page/NotFound';
export default function App() {
  return (
    <div className='app'>
      <MyProvider>
        <HashRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products/:category" element={<ProductCategory />} />
            <Route path="/product/:category/:type/:id" element={<Product />} />
            <Route path="/product/:category/:id" element={<Product />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/notfound" element={<NotFound />} />
          </Routes>
        </HashRouter>
      </MyProvider>

    </div>

  );
}

