import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./App.css";
import { Taps } from "./Resources/data/Taps";
import { Nav } from "./Componants/navBar/navBar";
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
    </div>
  );
}

export default App;
