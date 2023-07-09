import React, { useState, useEffect } from 'react';
import '../asets/cart.css';
import {AppContext} from './abayacontext';
import { getProduct } from '../Service/api';


const Cart = () => {

  const [abaya,setAbaya]  = useState([]);

  useEffect(() => {
    getProducts();
  },[]);

  const getProducts = async () => {
    const products = await getProduct();
    setAbaya(products.data);

    console.log(products);
    console.log(abaya);
    
  };

  
  

   const itm = abaya.filter((item)=> item.selected === true);
   
   const handleRemove = (item) => {
    setAbaya((prevAbaya) =>
      prevAbaya.map((abayaItem) => {
        if (abayaItem.name === item.name) {
          return { ...abayaItem, selected: false };
        }
        return abayaItem;
      })
    );
  };

  // const handleIncrement = (item) => {
  //   setAbaya((prevAbaya) =>
  //     prevAbaya.map((abayaItem) => {
  //       if (abayaItem.name === item.name) {
  //         return { ...abayaItem, quantity: abayaItem.quantity + 1 };
  //       }
  //       return abayaItem;
  //     })
  //   );
  // };

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
                <img src={`https://halalwardrobe-server.onrender.com`+item.image} alt={item.name} className="cart-item-image" />
                <span className="cart-item-name">{item.name}</span>
                <span className="cart-item-price">{item.price}</span>
                <button className="cart-item-remove" onClick={() => handleRemove(item)}>
                  Remove
                </button>
                <button className="cart-item-remove" >
                  Increment
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
    

};

export default Cart;
