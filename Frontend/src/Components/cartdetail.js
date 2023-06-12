import React, { useContext } from 'react';
// import { cartItems } from './abaya';




const Cart = ({  }) => {
  const cartItem= useContext();
  const handleRemove = (item) => {
    // removeFromCart(item);
  };

  return (
    <div>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.name}>
              {item.name}
              <img src={item.image} alt={item.name} />
              {item.price}
              <button onClick={() => handleRemove(item)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
