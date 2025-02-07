import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar/NavBar.jsx";
import ProductContainer from "./components/products/ProductContainer.jsx";
import macminim4 from "./assets/macminim4.webp";
import iphone16 from "./assets/iphone16pro.webp";
import Offers from "./components/offers/Offers.jsx";
import MyAccount from "./components/account/MyAccount.jsx";

const App = () => {
  return (
    <Router>
      <NavBar />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <ProductContainer
                  title="Mac Mini M4"
                  text="Compact power with the Mac Mini M4. Equipped with the revolutionary M4 chip, it offers ultra-fast performance and energy efficiency."
                  price="From $599"
                  img={macminim4}
                />
                <ProductContainer
                  title="Iphone 16 Pro"
                  text="Discover the future with the iPhone 16 Pro. With a premium design, 6.7-inch Super Retina XDR display, and the powerful A18 Bionic chip for incredible performance."
                  price="From $999"
                  img={iphone16}
                />
              </>
            }
          />
          <Route path="/special-offers" element={<Offers />} />
          <Route path="/my-account" element={<MyAccount />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
