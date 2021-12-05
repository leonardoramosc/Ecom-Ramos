import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./container/ItemListContainer";

import "./App.css";
import ItemDetailContainer from "./container/itemDetailContainer";
import { CartProvider } from "./cartContext";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="app">
          <NavBar />
          <Routes>
            <Route exact path="/" element={<ItemListContainer />} />
            <Route exact path="/category/:id" element={<ItemListContainer />} />
            <Route
              exact
              path="/item/:idProducto"
              element={<ItemDetailContainer />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
