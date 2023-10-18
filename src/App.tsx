import {
  Routes,
  Route,
  Navigate,
  Outlet,
} from 'react-router-dom';

import { useState } from 'react';

import './App.scss';

import { HeaderOnPage } from './components/Header/HeaderOnPage';
import { Footer } from './components/Footer/Footer';
import { HomePage } from './components/HomePage/Carusel/MainPage/HomePage';
import { PhonePage } from './components/PhonePage/PhonePage';
import { Product } from './helpers/Product';

import jsonProduct from "./products.json";
import { TabletPage } from './components/TabletsPage/TablatesPage';
import { Accessories } from './components/Accessories/Accessories';
import { NotFound } from './components/NotFound/NotFound';

const OutletPage = () => {
  return (
    <div className="page">
      <HeaderOnPage />

          <Outlet />

      <Footer />
    </div>
  );
};

export const App = () => {
  const [products] = useState<Product[]>(() => {
    const storedProduct = localStorage.getItem('product');

    return storedProduct ? JSON.parse(storedProduct) : jsonProduct;
  });

  const [addProduct] = useState<Product[]>(() => {
    const storedProduct = localStorage.getItem('addProduct');

    return storedProduct ? JSON.parse(storedProduct) : [];
  });

  const [likeProduct] = useState<Product[]>(() => {
    const storedProduct = localStorage.getItem('likeProduct');

    return storedProduct ? JSON.parse(storedProduct) : [];
  });

  return(
  <Routes >
     <Route
      path="/"
      element={<OutletPage />}
    >
      <Route
        index
        element={<HomePage />}
      />

      <Route
        path="phones"
        element={<PhonePage products={products} />}
      />

      <Route
        path='tablets'
        element={<TabletPage products={products} />}
      />

      <Route
        path='accessories'
        element={<Accessories products={products} />}
      />

        <Route path="*" element={<NotFound />} />
        <Route path="home" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

