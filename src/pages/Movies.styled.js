import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

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

export const Form = styled.form`
  margin-bottom: 16px;
`;

export const InputForm = styled.input`
  padding: 8px;
  border-radius: 4px;
  margin-right: 16px;
  font-size: 16px;
`;

export const Btn = styled.button`
  border: none;
  padding: 8px;
  font-size: 18px;
  border-radius: 4px;
`;
