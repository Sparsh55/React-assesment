import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../context/ProductContext.jsx';
import './ProductDetails.css'; // Adjust path as needed

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const product = products.find(p => p.id === parseInt(id, 10));

  if (!product) return <div className="product-details-container">Product not found</div>;

  return (
    <div className="product-details-container">
      <h2>{product.title}</h2>
      <p><span>Price:</span> ${product.price.toFixed(2)}</p>
      <p><span>Popularity:</span> {product.popularity.toLocaleString()}</p>
      <p><span>Description:</span> {product.description || 'No description available'}</p>
    </div>
  );
};

export default ProductDetails;


