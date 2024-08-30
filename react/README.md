####  Vite + React
This is a simple Vite + React app which is fetching an api and showing results on ui.
Deployed link: - [https://cute-bavarois-36ef06.netlify.app/]

### Description

This is a simple webpage fetching api and showing results on ui where you can have functionality like sorting, filtering , searching, paginations etc

Note:- There is an issue with the provided api due to CORS policy, to fix this once page is loaded do inspect on the page wait for 1 min and close the 
inspection tool, results from fetching the api could be seen in ui

### Screenshots
![image](https://github.com/Sparsh55/React-assesment/blob/main/react/src/assets/d.PNG)


### Tech Stack

Html, css .js and Vite + React js.

### Components 
1. ProductDetails
Purpose: Displays detailed information about a single product based on the product ID from the URL.
Usage: Fetches and shows the product's title, price, popularity, and description. Used on product-specific pages.
2. ProductList
Purpose: Displays a list of products with pagination, sorting, and filtering options.
Usage: Retrieves and manages the list of products, handles pagination, and integrates sorting and filtering components.
3. SortProducts
Purpose: Provides sorting functionality to order products by criteria such as price and popularity.
Usage: Allows users to select sorting options (e.g., price ascending/descending, popularity ascending/descending) to reorder the product list.
4. FilterProducts
Purpose: Filters products based on search queries, price ranges, and popularity ranges.
Usage: Implements search and filter functionality to narrow down the product list according to user input for title, price, and popularity ranges.
5. ProductTable
Purpose: Renders a table displaying product details in a structured format.
Usage: Used within ProductList to show product information (title, price, popularity) in a tabular format with styling.

### How to setup the project on local system

  1. Clone this project
  2. cd react
  3. npm install
  4. npm run dev

### Desigened and deveoped by Sparsh Saxena

