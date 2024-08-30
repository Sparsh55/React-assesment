import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ProductProvider } from './context/ProductContext.jsx';
import ProductList from './components/ProductList.jsx';
import ProductDetails from './components/ProductDetails.jsx';
import './App.css';


function App() {
  // const [count, setCount] = useState(0)

  return (
    <ProductProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/product/:id" element={<ProductDetails />} />
          </Routes>
        </div>
      </Router>
    </ProductProvider>
  );
}

export default App
