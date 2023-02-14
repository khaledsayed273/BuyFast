import Nav from "./components/Nav";
import './App.css'
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import CardsAdded from "./components/About";
import Provider from "./store/store";
import Products from "./components/Products";

function App() {
  return (
    <>
      <Provider>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cards" element={<CardsAdded />} />
          </Routes>
      </Provider>
    </>
  );
}

export default App;
