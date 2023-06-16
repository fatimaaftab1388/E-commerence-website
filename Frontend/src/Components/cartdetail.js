import React, { useContext } from 'react';
// import { cartItems } from './abaya';
import {AppContext} from './abayacontext';



const Cart = ({  }) => {

   const { abaya, setAbaya,hijab,setHijab }= useContext(AppContext);
   
   
   const itm = abaya.filter((item)=> item.selected === true);
   
  const handleRemove = (item) => {
    // removeFromCart(item);
  };

  return (
    <div>
      <h2>Cart</h2>
      {itm.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {
          
          
          itm.map((item) => (
            <li key={item.name}>
              {item.name}
              <img src={item.image} alt={item.name} />
              {item.price}
              <button onClick={() => handleRemove(item)}>Remove</button>
            </li>
          ))
          
          }
        </ul>
      )}
    </div>
  );
};

export default Cart;
