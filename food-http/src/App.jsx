import Header from "./components/Header";
import { Cart, Checkout } from "./components/cart";
import FoodList from "./components/food/FoodList";
import { CartContextProvider, UserProgressContextProvider } from "./store";

function App() {
  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <Header />
        <FoodList />
        <Cart />
        <Checkout />
      </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;
