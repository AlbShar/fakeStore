import Header from "components/header/header";
import HomePage from "pages/home/home";
import ProductDetailPage from "pages/productDetail/productDetail";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export const MyRoutes = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
      </Routes>
    </Router>
  );
};
