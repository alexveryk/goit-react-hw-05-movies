import { Outlet, NavLink } from 'react-router-dom';
import styled from 'styled-components';
const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;

export const SharedLayout = () => {
  return (
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
      <Outlet />
    </nav>
  );
};
