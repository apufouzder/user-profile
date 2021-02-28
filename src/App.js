import './App.css';
import User from './components/User/User';
import usersData from './usersData';
import { useState } from 'react';
import Cart from './components/Cart/Cart';
import logo from './logo.svg';


function App() {
  const [cart, setCart] = useState([]);
  // const first10 = usersData.slice(0,10)

  const handleAddCart = (user) =>{
    const newCart = [...cart, user];
    setCart(newCart);
  }

  return (
    <div className="main-container">
      <div className="header">
      <img src={logo} className="App-logo" alt="logo" />
        <h1>Meet Our Team</h1>
      </div>
      <div className="info">
        <div className="user-profile">
          <div>
            {
              usersData.map((user) => {
                return (
                  <User key={user.id} user={user} handleAddCart={handleAddCart}></User>
                )
              })
            }
          </div>
        </div>
        <div>
          <Cart cart={cart}></Cart>
        </div>
      </div>
    </div>
  );
}


export default App;
