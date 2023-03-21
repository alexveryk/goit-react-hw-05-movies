import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Containet = styled.div`
  width: 1080px;
  margin-left: auto;
  margin-right: auto;
`;

export const NavMenu = styled.nav`
  padding: 10px;
  border-bottom: 14px solid #ffa50045;
  border-radius: 20px;
  box-shadow: 4px 9px -1px;
  margin-bottom: 16px;
`;

export const NavLinkStyled = styled(NavLink)`
  font-size: 20px;
  text-decoration: none;
  padding: 4px 8px;

  &.active {
    color: white;
    background-color: orange;
    border-radius: 4px;
  }
`;
