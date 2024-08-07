import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import Cart from './components/Cart';
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <Cart />
    </Provider>
  );
};

export default App;
