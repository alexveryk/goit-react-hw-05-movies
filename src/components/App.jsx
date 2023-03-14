import { Routes, Route, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { About } from './pages/About';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { ProductDetails } from './pages/ProductDetails';
import { Products } from './pages/Products';

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;

export const App = () => {
  return (
    <div>
      <nav>
        {/* <Link />  <NavLink />*/}
        {/* Компонент <NavLink> відрізняється тільки тим, що може мати додаткові стилі, якщо поточний 
        URL збігається зі значенням пропcа to. За замовчуванням елементу активного посилання додається 
        клас active. Це можна використовувати для її стилізації. */}

        <StyledLink to="/" end>
          Home
        </StyledLink>
        <StyledLink to="/about">About</StyledLink>
        <StyledLink to="/products">Products</StyledLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="products/:productId" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
