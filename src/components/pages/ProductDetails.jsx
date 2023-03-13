import { useParams } from 'react-router-dom';

export const ProductDetails = () => {
  const { productId } = useParams();
  return <div>ProductDetails </div>;
};
