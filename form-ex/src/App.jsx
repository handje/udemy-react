import Header from "./components/Header.jsx";
import Login from "./components/Login.jsx";
import StateLogin from "./components/Login-useState.jsx";
import Signup from "./components/Signup.jsx";
import CustomLogin from "./components/Login-customhook.jsx";
function App() {
  return (
    <>
      <Header />
      <main>
        <CustomLogin />
      </main>
    </>
  );
}

export default App;
