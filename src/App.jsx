import './App.scss'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Products from './components/Products/Products'
import SingleProduct from './components/SingleProduct/SingleProduct'
import Profile from './components/Profile/Profile'
import Cart from './components/Cart/Cart'
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import { ProductProvider } from './context/ProductContext/ProductState';
import { UserProvider } from './context/UserContext/UserState';
import { CategoryProvider } from './context/CategoryContext/CategoryState';

function App() {

  return (  
    <>
      <BrowserRouter>
        <ProductProvider>
          <UserProvider>
            <CategoryProvider>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products/:id" element={<Products />} />
                <Route path="/single/:id" element={<SingleProduct />} />
                <Route path="/register" element={<Register />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
              </Routes>
            </CategoryProvider>
          </UserProvider>
        </ProductProvider>
      </BrowserRouter>
    </>
  )
}

export default App
