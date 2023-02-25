import Nav from "./components/Nav";
import './App.css'
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import CardsAdded from "./components/About";
import Provider from "./store/store";
import Products from "./components/Products";
import { QueryClient, QueryClientProvider } from "react-query";
import Admin from "./components/Admin";

function App() {

  const queryClient  = new QueryClient()

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Provider>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cards" element={<CardsAdded />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </Provider>
      </QueryClientProvider>

    </>
  );
}

export default App;
