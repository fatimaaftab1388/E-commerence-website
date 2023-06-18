import React from 'react';
import '../asets/admindashboard.css';
import {useNavigate} from 'react-router-dom';
import { FaHome, FaPlus, FaTrash, FaClipboardList, FaUsers } from 'react-icons/fa';

const Nav = () => {
  const navigate=useNavigate();
  const handleHome=()=>{
    navigate('/Components/home');
  }
  const handleAdd=()=>{
    navigate('/Components/adminaddprod');
  }
  return (
    <div className="navbar">
      <div className="logo2-container">
        <img src='../images/logo2.png' alt="Logo" className="logo2" />
      </div>
      <div className="menu-container">
        <ul className="menu">
          <li className="menu-item" onClick={handleHome}><FaHome className="menu-icon" />Home</li>
          <li className="menu-item" onClick={handleAdd}><FaPlus className="menu-icon" />Add Product</li>
          <li className="menu-item"><FaTrash className="menu-icon" /><a href="#">Delete Product</a></li>
          <li className="menu-item"><FaClipboardList className="menu-icon" /><a href="#">Orders</a></li>
          <li className="menu-item"><FaUsers className="menu-icon" /><a href="#">Customers</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
