import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const MainHeader = styled.h1`
  padding: 0 0 0 12px;
  margin: 0 0 16px 0;
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
`;

export const ListItem = styled.li`
  border-radius: 4px;
  background-color: #ffa50045;
  list-style: none;
  padding: 12px;
  font-size: 20px;
  margin-bottom: 8px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;
