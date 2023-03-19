import { useParams } from 'react-router-dom';

export const Movies = () => {
  const { id } = useParams();
  <input type="text" />;
  return <div>Now showing product with id - {id}</div>;
};
