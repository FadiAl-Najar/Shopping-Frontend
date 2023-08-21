import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import FavProducts from "./components/FavProducts/FavProducts";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/favProducts" element={<FavProducts />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
