import React from 'react';
import '../asets/admindashboard.css';
import {useNavigate} from 'react-router-dom';
//import { FaHome, FaPlus, FaTrash, FaClipboardList, FaUsers } from 'react-icons/fa';

const Nav = () => {
  const navigate=useNavigate();
  const handleHome=()=>{
    navigate('/Components/home');
  }
  const handleAdd=()=>{
    navigate('/Components/adminaddprod');
  }
  const handlecustomer=()=>{
    navigate('/Components/admincustomer');
  }
  return (
    <div className="navbar">
      <div className="logo2-container">
        <img src='../images/logo2.png' alt="Logo" className="logo2" />
      </div>
      <div className="menu-container">
        <ul className="menu">
          <li className="menu-item" onClick={handleHome}>Home</li>
          <li className="menu-item" onClick={handleAdd}>Add Product</li>
          <li className="menu-item"><a href="#">Delete Product</a></li> 
          <li className="menu-item"><a href="#">Orders</a></li>
          <li className="menu-item" onClick={handlecustomer}>Customers</li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
//<FaTrash className="menu-icon" />
//<FaClipboardList className="menu-icon" />
//<FaUsers className="menu-icon" />
//<FaHome className="menu-icon" />
//<FaPlus className="menu-icon" />