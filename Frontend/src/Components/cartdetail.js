import React, { useContext } from 'react';
import '../asets/cart.css';
import {AppContext} from './abayacontext';



const Cart = ({  }) => {

   const { abaya, setAbaya }= useContext(AppContext);
   
   
   const itm = abaya.filter((item)=> item.selected === true);
   
  const handleRemove = (item) => {
    // removeFromCart(item);
  };

  return (
      <div className="cart-container">
        <div style={{borderBottom:'1 px soid gray'}}>
        <h2 className="cart-title">Your Cart</h2>
        </div>
        {itm.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {itm.map((item) => (
              <li key={item.name} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <span className="cart-item-name">{item.name}</span>
                <span className="cart-item-price">{item.price}</span>
                <button className="cart-item-remove" onClick={() => handleRemove(item)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
    

};

export default Cart;
