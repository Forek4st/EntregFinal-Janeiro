import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import ItemListContainer from "./components/products/ItemListContainer";
import ItemDetailContainer from "./components/itemdetailcontainer/ItemDetailContainer";
import SpecialOffers from "./components/offers/Offers.jsx";
import Mac from "./components/mac/Mac";
import Ipad from "./components/ipad/Ipad";
import Iphone from "./components/iphone/Iphone";
import Watch from "./components/watch/Watch";
import Airpods from "./components/airpods/AirPods.jsx";
import MyAccount from "./components/account/MyAccount.jsx";
import Cart from "./components/cart/Cart.jsx"; // Import Cart
import { CartProvider } from "./context/CartContext";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term.toLowerCase());
  };

  return (
    <CartProvider>
      <Router>
        <NavBar onSearch={handleSearch} />
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer searchTerm={searchTerm} />}
          />
          <Route path="/special-offers" element={<SpecialOffers />} />
          <Route path="/mac" element={<Mac />} />
          <Route path="/ipad" element={<Ipad />} />
          <Route path="/iphone" element={<Iphone />} />
          <Route path="/watch" element={<Watch />} />
          <Route path="/airpods" element={<Airpods />} />
          <Route path="/my-account" element={<MyAccount />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} /> {/* Add route for Cart */}
          <Route
            path="*"
            element={
              <>
                <main className="not-found">
                  <h1> The page you’re looking for can’t be found.</h1>
                </main>
              </>
            }
          />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
