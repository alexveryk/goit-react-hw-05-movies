import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const MovieWrapper = styled.div`
  display: flex;
  gap: 30px;
`;

export const StyledLink = styled(Link)`
  padding: 8px;
  font-size: 16px;
  background-color: grey;
  border-radius: 4px;
  text-decoration: none;
  margin-bottom: 8px;
  color: white;
`;
