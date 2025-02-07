import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar/NavBar.jsx";
import ProductContainer from "./components/products/ProductContainer.jsx";
import model3 from "./assets/model3.png";
import modely from "./assets/modely.png";
import SpecialOffers from "./components/specialoffers/SpecialOffers.jsx";
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
                  title="Model 3"
                  text="Gracias a un exterior actualizado y optimizado para maximizar la eficiencia aerodinámica, podrás recorrer hasta 548 kilómetros (est. EPA) con una sola carga."
                  img={model3}
                />
                <ProductContainer
                  title="Model Y"
                  text="Disfruta de tu viaje en carretera. Con hasta 497 km (est. EPA) de autonomía con una sola carga, es probable que necesites un descanso antes que tu Model Y."
                  img={modely}
                />
              </>
            }
          />
          <Route path="/special-offers" element={<SpecialOffers />} />
          <Route path="/my-account" element={<MyAccount />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
