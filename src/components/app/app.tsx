import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollToTop from '../scroll-to-top/scroll-to-top';
import BasketPage from '../../pages/basket-page/basket-page';
import CatalogPage from '../../pages/catalog-page/catalog-page';
import ProductPage from '../../pages/product-page/product-page';
import Layout from '../layout/layout';
import Page404 from '../error-page/error-page';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<CatalogPage />} />
          <Route path='page_:id' element={<CatalogPage />} />
          <Route path='product/:id'>
            <Route index element={<ProductPage />} />
          </Route>
          <Route path='basket' element={<BasketPage />} />
          <Route path='*' element={<Page404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
