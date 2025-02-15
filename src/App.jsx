import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar/NavBar.jsx";
import { CartProvider } from "./context/CartContext";

import ItemListContainer from "./components/products/ItemListContainer.jsx";
import ItemDetailContainer from "./components/itemdetailcontainer/ItemDetailContainer.jsx";
import Offers from "./components/offers/Offers.jsx";
import Mac from "./components/mac/Mac.jsx";
import Ipad from "./components/ipad/Ipad.jsx";
import Iphone from "./components/iphone/Iphone.jsx";
import Watch from "./components/watch/Watch.jsx";
import AirPods from "./components/airpods/AirPods.jsx";

const App = () => {
  return (
    <CartProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/special-offers" element={<Offers />} />
          <Route path="/mac" element={<Mac />} />
          <Route path="/ipad" element={<Ipad />} />
          <Route path="/iphone" element={<Iphone />} />
          <Route path="/watch" element={<Watch />} />
          <Route path="/airpods" element={<AirPods />} />
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
};

export default App;
