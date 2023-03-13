import React from 'react'
import {NavLink, useNavigate} from 'react-router-dom'
import { IoPerson, IoPricetag, IoHome, IoLogOut} from "react-icons/io5"
import { useDispatch, useSelector } from 'react-redux';
import { LogOut, reset } from "../features/authSlice"

const Sidebar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user } = useSelector((state)=> state.auth);

const Logout = ()=>{
    dispatch(LogOut());
    dispatch(reset());
    navigate("/")
}

  return (
    <div>
      <aside className="menu pl-2 has-shadow">
  <p className="menu-label">
    Karyawan
  </p>
  <ul className="menu-list">
    <li><NavLink to={"/dashboard"}><IoHome/> Dashboard</NavLink></li>
    <li><NavLink to={"/products"}><IoPricetag/> Pengajuan</NavLink></li>
  </ul>

{user && user.role === "admin" && (
    <div>
        <p className="menu-label">
    HR
  </p>
  <ul className="menu-list">
    <li><NavLink to={"/users"}><IoPerson/> Form Manage</NavLink></li>
  </ul>
  <ul className="menu-list">
    <li><NavLink to={"/users/add"}><IoPerson/> Announcement</NavLink></li>
  </ul>
    </div>
)}

  <p class="menu-label">
    Settings
  </p>
  <ul class="menu-list">
    <li><button onClick={Logout} className='button is-white'><IoLogOut/> Logout</button></li>
  </ul>
</aside>
    </div>
  )
}

export default Sidebar