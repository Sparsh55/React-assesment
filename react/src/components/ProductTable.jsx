
import PropTypes from 'prop-types';
import './ProductTable.css'; // Adjust the path as needed

const ProductTable = ({ products }) => {
  if (!Array.isArray(products)) {
    return <p>No products available.</p>;
  }

  return (
    <table className="product-table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Price</th>
          <th>Popularity</th>
        </tr>
      </thead>
      <tbody>
        {products.length > 0 ? (
          products.map((product) => (
            <tr key={product.id}>
              <td>{product.title}</td>
              <td>${product.price.toFixed(2)}</td>
              <td>{product.popularity.toLocaleString()}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="3">No products found</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

// Define propTypes for ProductTable
ProductTable.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      popularity: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default ProductTable;
