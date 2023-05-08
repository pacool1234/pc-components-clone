import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Products from './components/Products/Products'
import Profile from './components/Profile/Profile'
import Cart from './components/Cart/Cart'
import Register from './components/Register/Register';
import Login from './components/Login/Login';

function App() {

  return (  
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/home" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
