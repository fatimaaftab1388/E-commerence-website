import Login from "./Components/loginform";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/home";
import Abaya from "./Components/abaya";
import Cart from "./Components/cartdetail";
import Hijab from "./Components/hijab";
import Niqab from "./Components/niqab";
import Caps from "./Components/caps";
import SignUpForm from "./Components/signup";
import AbayaDetail from "./Components/abayadetails";
import Bundles from "./Components/hijabbundles";
import About from "./Components/aboutus";
import { useState } from "react";
import Admin from "./Components/admindashboard";
import AddProduct from "./Components/adminaddprod";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  return (
    <div style={{ width: "100%" }}>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Components/loginform" element={<Login />}></Route>
        <Route
          path="/Components/abaya"
          element={<Abaya addToCart={addToCart} />}
        />
        <Route path="/Components/hijab" element={<Hijab />}></Route>
        <Route path="/Components/home" element={<Home />}></Route>
        <Route
          path="/Components/cartdetail"
          element={<Cart cartItems={cartItems} />}
        />
        <Route path="/details" element={<AbayaDetail />} />
        <Route path="/Components/signup" element={<SignUpForm />}></Route>
        <Route path="/Components/niqab" element={<Niqab />}></Route>
        <Route path="/Components/hijabbundles" element={<Bundles />}></Route>
        <Route path="/Components/caps" element={<Caps />}></Route>
        <Route path="/Components/aboutus" element={<About />}></Route>
        <Route path="/Components/admin" element={<Admin />}></Route>
        <Route path="/Components/adminaddprod" element={<AddProduct />}></Route>
      </Routes>
    </div>
  );
}

export default App;
