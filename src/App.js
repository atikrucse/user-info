import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import userData from './data/userInfo.json';
import User from './Component/User';
import Cart from './Component/Cart/Cart';

function App() {
  const [users, setUsers] = useState([]);
  const [cart, setCart] = useState([]);


  const addUserController = (user) => {
    const newCart = [...cart, user];
    setCart(newCart);
  };

  useEffect(() =>{
    setUsers(userData);
  }, [])
  return (
    <div className="App">
      <h1>User Info</h1>
        <div className="body-container">
        <User users = {users} addUserController={addUserController}></User>
        <Cart className='cart' cart = {cart}></Cart>
        </div>
    </div>
  );
}

export default App;
