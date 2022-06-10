import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
/* import ItemCount from "./components/ItemCount/ItemCount"; */
import ItemDetailCotainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContextProvider } from "./Context/CartContext";
import Cart from "./components/Cart/Cart";
function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={
                <ItemListContainer title="Bienvenido a nuestra tienda" />
              }
            />
            <Route path="*" element={<h1>Error de ruta...</h1>} />
            <Route path="/detail/:productId" element={<ItemDetailCotainer />} />
            <Route
              path="/category/:categoryId"
              element={<ItemListContainer title="Resultados..." />}
            />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
