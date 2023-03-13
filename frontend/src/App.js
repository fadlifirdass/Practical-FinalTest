import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Users from "./pages/Users";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/users" element={<Users/>}/>
        <Route path="/users/add" element={<AddUser/>}/>
        <Route path="/users/edit/:id" element={<EditUser/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/products/add" element={<AddProduct/>}/>
        <Route path="/products/edit/:id" element={<EditProduct/>}/>
        <Route path="/" element={<Login/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;