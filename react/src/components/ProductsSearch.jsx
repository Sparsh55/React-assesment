import { useState } from 'react';
import PropTypes from 'prop-types';

const ProductFilters = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  // Handle input change and pass the search query to the parent component
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div className="product-filters">
      <label htmlFor="search">Search by title:</label>
      <input
        type="text"
        id="search"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Enter product title"
      />
    </div>
  );
};

// Prop validation
ProductFilters.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default ProductFilters;
