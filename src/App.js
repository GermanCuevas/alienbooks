import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount";
import ItemDetailCotainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <ItemListContainer title="Bienvenido a nuestra tienda" />
      <ItemCount initCount={1} stock={3} />
      <ItemDetailCotainer />
    </div>
  );
}

export default App;
