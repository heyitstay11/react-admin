import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import ProductList from "./pages/productList/ProductList";
import Loader from './components/loader/Loader';
import { Routes, Route } from 'react-router-dom';
import { useState, lazy, Suspense } from "react";

const User = lazy(() => import("./pages/user/User"));
const Product = lazy(() => import("./pages/product/Product"));
const NewProduct = lazy(() => import("./pages/newProduct/NewProduct"));
const NewUser =  lazy(() => import("./pages/newUser/NewUser"));

function App() {
  const [openSideBar, setOpenSideBar] = useState(false);

  return (
    <div className="">
      <Topbar setOpenSideBar={setOpenSideBar} isOpen={openSideBar} />
      <div className="container">
       <Sidebar isOpen={openSideBar} setOpenSideBar={setOpenSideBar}/>
       <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/user/:userId" element={<User />} />
          <Route path="/newuser" element={<NewUser />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/newproduct" element={<NewProduct />} />
        </Routes>
       </Suspense>
      </div>
    </div>
  )
}

export default App
