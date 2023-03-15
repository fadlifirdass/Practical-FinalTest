import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Users from "./pages/Users";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";
import Absensi from "./pages/Absensi";
import Karyawan from "./pages/Karyawan";
import Pengumuman from "./pages/Pengumuman";
import AddPengumuman from "./pages/AddPengumuman";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/users" element={<Users/>}/>
        <Route path="/users/karyawan" element={<Karyawan/>}/>
        <Route path="/users/pengumuman" element={<Pengumuman/>}/>
        <Route path="/users/pengumuman/add" element={<AddPengumuman/>}/>
        <Route path="/users/add" element={<AddUser/>}/>
        <Route path="/users/edit/:id" element={<EditUser/>}/>
        <Route path="/pengajuan" element={<Products/>}/>
        <Route path="/pengajuan/add" element={<AddProduct/>}/>
        <Route path="/pengajuan/edit/:id" element={<EditProduct/>}/>
        <Route path="/absensi" element={<Absensi/>}/>
        <Route path="/" element={<Login/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
