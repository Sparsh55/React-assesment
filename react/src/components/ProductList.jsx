import { useContext, useEffect, useState } from 'react';
import ProductTable from './ProductTable';
import ProductFilters from './ProductsFilter';
import { ProductContext } from '../context/ProductContext';
import { sortProducts } from '../components/sortProducts';
import './ProductList.css';

const ProductList = () => {
  const { products } = useContext(ProductContext);
  const [productList, setProductList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortCriteria, setSortCriteria] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [popularityRange, setPopularityRange] = useState('');
  const productsPerPage = 20;

  const result = Object.keys(products).map((key) => ({
    id: key,
    subcategory: products[key].subcategory,
    title: products[key].title,
    price: Number(products[key].price),
    popularity: Number(products[key].popularity),
  }));

  useEffect(() => {
    if (Array.isArray(result)) {
      setProductList(result);
    }
  }, [products]);

  const filterProducts = (products) => {
    let filteredProducts = products;

    if (searchQuery) {
      filteredProducts = filteredProducts.filter(product =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (priceRange) {
      const [minPrice, maxPrice] = priceRange.split('-').map(Number);
      filteredProducts = filteredProducts.filter(product =>
        (isNaN(minPrice) || product.price >= minPrice) &&
        (isNaN(maxPrice) || product.price <= maxPrice)
      );
    }

    if (popularityRange) {
      const [minPopularity, maxPopularity] = popularityRange.split('-').map(Number);
      filteredProducts = filteredProducts.filter(product =>
        (isNaN(minPopularity) || product.popularity >= minPopularity) &&
        (isNaN(maxPopularity) || product.popularity <= maxPopularity)
      );
    }

    return sortProducts(filteredProducts, sortCriteria);
  };

  const sortedAndFilteredProducts = filterProducts(productList);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedAndFilteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSortChange = (event) => {
    setSortCriteria(event.target.value);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handleFilter = ({ priceRange, popularityRange }) => {
    setPriceRange(priceRange);
    setPopularityRange(popularityRange);
    setCurrentPage(1);
  };

  const totalPages = Math.ceil(sortedAndFilteredProducts.length / productsPerPage);

  return (
    <div className="product-list-container">
      <ProductFilters onSearch={handleSearch} onFilter={handleFilter} />
      <div className="sort-container">
        <label htmlFor="sort">Sort by:</label>
        <select id="sort" value={sortCriteria} onChange={handleSortChange}>
          <option value="">Default</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="popularity-asc">Popularity: Low to High</option>
          <option value="popularity-desc">Popularity: High to Low</option>
        </select>
      </div>
      <ProductTable products={currentProducts} />
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            disabled={currentPage === index + 1}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
