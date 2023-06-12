import React, { useContext, useState } from "react";
import { AppContext } from "./abayacontext";
import '../asets/admin.css';
import { useNavigate } from "react-router-dom";
const AdminSet = () => {
  const items = useContext(AppContext);
  const [itemsState, setItemsState] = useState(items);

  const handle = (id) => {
    const newArr = itemsState.filter(ite => id !== ite.id);
    setItemsState(newArr);
  }
const nav=useNavigate();
 
const naviagteHook1=()=>{
nav(-1);
}


  return (
    <div>
      <div className="admin">
        {itemsState.map((p) => (
          <div className="admin-card" key={p.id}>
            <img src={p.image} alt={p.name} className="abaya-img" />
            <div id="sm-cart">
              <p style={{ marginTop: '1%', marginBottom: "1%" }}>{p.name}</p>
              <h6>Rs. {p.price} PKR</h6>
              <button className='b2' onClick={(e) => handle(p.id)}>
                Remove
              </button>
              
            </div>
          </div>
        ))}
        
      </div>
      
    </div>
  );
};

export default AdminSet;
