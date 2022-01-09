import Sidebar from "./components/sidebar/Sidebar"
import Topbar from "./components/topbar/Topbar"
import "./App.css";
import Home from "./pages/home/Home";
import { Routes, Route } from 'react-router-dom';
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";

function App() {
  return (
    <div className="">
      <Topbar />
      <div className="container">
       <Sidebar />
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/users" element={<UserList />} />
         <Route path="/user/:userId" element={<User />} />
       </Routes>
      </div>
    </div>
  )
}

export default App
