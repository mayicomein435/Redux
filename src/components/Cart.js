import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCartItems, incrementQuantity, decrementQuantity } from '../features/cart/cartSlice';
import products from '../product.json'; // Import the JSON file

const Cart = () => {
  const dispatch = useDispatch();
  const { items, totalQuantity, totalAmount } = useSelector((state) => state.cart);

  useEffect(() => {
    // Add a quantity property to each product
    const productsWithQuantity = products.products.map(product => ({
      ...product,
      quantity: 1,
    }));
    dispatch(setCartItems(productsWithQuantity));
  }, [dispatch]);

  const handleIncrement = (id) => {
    dispatch(incrementQuantity(id));
  };

  const handleDecrement = (id) => {
    dispatch(decrementQuantity(id));
  };

  return (
    <div>
      <h1> 🛒 Cart</h1>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <img src={item.thumbnail} alt={item.title} style={{ width: '100px', height: '100px' }} />
            
            
            <div>
            <h2>{item.title}</h2>
            <h3>⭐{item.rating}</h3>
            <p className='description'>{item.description}</p> 
            </div>
            <div>
              ${item.price} x {item.quantity}

            
            <button onClick={() => handleIncrement(item.id)}>+</button>
            <button onClick={() => handleDecrement(item.id)}>-</button>
            </div>
          </li>
        ))}
      </ul>
      <div>
        <h2>Total Quantity: {totalQuantity}</h2>
        <h2>Total Amount: ${totalAmount.toFixed(2)}</h2>
      </div>
    </div>
  );
};

export default Cart;
