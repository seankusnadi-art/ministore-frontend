import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-background text-on-background">
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;