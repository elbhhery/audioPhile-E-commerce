import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import HeadPhone from "./pages/HeadPhones/HeadPhonePage.tsx";
import Speakers from "./pages/speekers/speekersPage.tsx";
import EarPhones from "./pages/earPhones/earPhones.tsx";
import ScrollToTop from "./utils/scrollTop.jsx";
import ProductPage from "./pages/shared/productPage.tsx";
import "./App.css";
import Checkout from "./pages/checkout/checkOut.tsx";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/HeadPhone" element={<HeadPhone />} />
        <Route path="/Speakers" element={<Speakers />} />
        <Route path="/EarPhones" element={<EarPhones />} />
        <Route path="/product/:slug" element={<ProductPage />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </>
  );
}

export default App;
