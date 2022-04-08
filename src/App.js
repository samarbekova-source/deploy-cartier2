import "./App.css";
import "antd/dist/antd.css";
import JewelryContextProvider from "./contexts/jewelryContext";

import Routing from "./Routing";
import CartContextProvider from "./contexts/cartContext";
import AuthContextProvider from "./contexts/authContext";
import FavoriteContextProvider from "./contexts/favoritesContext";

// import FavContextProvider from "./contexts/favoritesContext";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <JewelryContextProvider>
          <FavoriteContextProvider>
            <CartContextProvider>
              <Routing />
            </CartContextProvider>
          </FavoriteContextProvider>
        </JewelryContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
