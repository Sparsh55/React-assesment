// src/utils/sortProducts.js

/**
 * Sorts products based on the provided criteria.
 * @param {Array} products - The list of products to be sorted.
 * @param {string} criteria - The sorting criteria (e.g., 'price-asc', 'popularity-desc').
 * @returns {Array} - The sorted list of products.
 */
export const sortProducts = (products, criteria) => {
  switch (criteria) {
    case 'price-asc':
      return [...products].sort((a, b) => a.price - b.price);
    case 'price-desc':
      return [...products].sort((a, b) => b.price - a.price);
    case 'popularity-asc':
      return [...products].sort((a, b) => a.popularity - b.popularity);
    case 'popularity-desc':
      return [...products].sort((a, b) => b.popularity - a.popularity);
    default:
      return products;
  }
};
