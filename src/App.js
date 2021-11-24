import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./container/ItemListContainer";

import "./App.css";
import ItemDetailContainer from "./container/itemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <NavBar />
        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
          <Route
            exact
            path="/detalle/:idProducto"
            element={<ItemDetailContainer />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
