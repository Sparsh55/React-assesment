import { useState } from 'react';
import PropTypes from 'prop-types';

const priceRanges = [
  { label: '0-5000', value: '0-5000' },
  { label: '5000-10000', value: '5000-10000' },
  { label: '10000-20000', value: '10000-20000' },
  { label: '20000+', value: '20000+' }
];

const popularityRanges = [
  { label: '0-10000', value: '0-10000' },
  { label: '10000-30000', value: '10000-30000' },
  { label: '30000-50000', value: '30000-50000' },
  { label: '50000+', value: '50000+' }
];

const ProductFilters = ({ onSearch, onFilter }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPriceRange, setSelectedPriceRange] = useState('');
  const [selectedPopularityRange, setSelectedPopularityRange] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    onSearch(event.target.value);
  };

  const handlePriceRangeChange = (event) => {
    setSelectedPriceRange(event.target.value);
    onFilter({
      priceRange: event.target.value,
      popularityRange: selectedPopularityRange
    });
  };

  const handlePopularityRangeChange = (event) => {
    setSelectedPopularityRange(event.target.value);
    onFilter({
      priceRange: selectedPriceRange,
      popularityRange: event.target.value
    });
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

      <label htmlFor="priceRange">Filter by price range:</label>
      <select id="priceRange" value={selectedPriceRange} onChange={handlePriceRangeChange}>
        <option value="">All prices</option>
        {priceRanges.map((range) => (
          <option key={range.value} value={range.value}>{range.label}</option>
        ))}
      </select>

      <label htmlFor="popularityRange">Filter by popularity range:</label>
      <select id="popularityRange" value={selectedPopularityRange} onChange={handlePopularityRangeChange}>
        <option value="">All popularity</option>
        {popularityRanges.map((range) => (
          <option key={range.value} value={range.value}>{range.label}</option>
        ))}
      </select>
    </div>
  );
};

// Prop validation
ProductFilters.propTypes = {
  onSearch: PropTypes.func.isRequired,
  onFilter: PropTypes.func.isRequired,
};

export default ProductFilters;
