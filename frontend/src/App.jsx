import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductLinkPage from './pages/ProductLinkPage';
import ResultPage from './pages/ResultPage';
import About from './pages/About'; // Assuming you have an About page
import ColorMatchPage from './pages/ColorMatchPage';
import PairWithPage from './pages/PairWithPage';
import PairWithPageMale from './pages/PairWithPageMale';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<ProductLinkPage />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/about" element={<About />} />
<Route path="/color-match" element={<ColorMatchPage />} />
<Route path="/pair-with" element={<PairWithPage />} />
 <Route path="/pair-with-male" element={<PairWithPageMale />} />

        {/* You can add more routes like /results later */}
      </Routes>
    </Router>
  );
}

export default App;
