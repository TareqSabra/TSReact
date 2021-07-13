import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
//import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import React from "react";
import "./App.css";
import { Taps } from "./Resources/data/Taps";
import { Footer } from "./Componants/footer/footer";
import { Nav } from "./Componants/navBar/navBar";
import { Homepage } from "./pages/HomePage/Home";
const navInfo = {
  retweetValue: 5,
  favValue: 5,
  cart_badeValue: 5,
  cartValue: 5,
};
function App() {
  return (
    <div className="App">
      <Nav Taps={Taps} navInfo={navInfo} />
      <Homepage />
      <Footer />
    </div>
  );
}

export default App;
