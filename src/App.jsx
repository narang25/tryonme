import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductLinkPage from './pages/ProductLinkPage';
import ResultPage from './pages/ResultPage';
import About from './pages/About'; // Assuming you have an About page


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<ProductLinkPage />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/about" element={<About />} />

        {/* You can add more routes like /results later */}
      </Routes>
    </Router>
  );
}

export default App;
