import { useParams } from 'react-router-dom';

export const ProductDetails = () => {
  const { productId } = useParams();
  console.log(productId);
  return <div>Now showing product with id - {productId}</div>;
};
