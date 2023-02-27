import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BasketPage from '../../pages/basket-page/basket-page';
import CatalogPage from '../../pages/catalog-page/catalog-page';
import ProductPage from '../../pages/product-page/product-page';
import Layout from '../layout/layout';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<CatalogPage />} />
          <Route path='/product/:id' element={<ProductPage />}/>
          <Route path='/basket' element={<BasketPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
