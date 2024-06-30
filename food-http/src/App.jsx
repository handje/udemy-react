import Header from "./components/Header";
import FoodList from "./components/food/FoodList";
import { CartContextProvider, ModalContextProvider } from "./store";

function App() {
  return (
    <ModalContextProvider>
      <CartContextProvider>
        <Header />
        <FoodList />
      </CartContextProvider>
    </ModalContextProvider>
  );
}

export default App;
