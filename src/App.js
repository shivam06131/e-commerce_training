import React from "react";
import HomePage from "./pages/Homepage/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Items from "./pages/Items/Items";
import Checkout from "./pages/Checkout/Checkout";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/items/:id" element={<Items />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
