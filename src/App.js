// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Product from "./components/product";
import Cart from "./components/Cart";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <Router>
      <div>
        <Provider store={store}>
          <Navbar />
          <Routes>
            <Route path="/products" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Provider>
      </div>
    </Router>
  );
}

export default App;
