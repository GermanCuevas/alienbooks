import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
/* import ItemCount from "./components/ItemCount/ItemCount"; */
import ItemDetailCotainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer title="Bienvenido a nuestra tienda" />}
          />
          <Route path="*" element={<h1>Error de ruta...</h1>} />
          <Route path="/detail/:productId" element={<ItemDetailCotainer />} />
          <Route
            path="/category/:categoryId"
            element={<ItemListContainer title="Resultados..." />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
