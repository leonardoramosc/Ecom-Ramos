import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./container/ItemListContainer";

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="Bienvenidos!" />
    </div>
  );
}

export default App;
