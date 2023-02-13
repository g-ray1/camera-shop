import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BasketPage from '../../pages/basket-page/basket-page';
import CatalogPage from '../../pages/catalog-page/catalog-page';
import ProductPage from '../../pages/product-page/product-page';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<CatalogPage />} />
        <Route path='/product' element={<ProductPage />} />
        <Route path='/basket' element={<BasketPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
