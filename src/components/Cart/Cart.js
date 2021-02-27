import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);
    const total = cart.reduce((total, slry) => total + slry.salary, 0)

    return (
        <div className="cart">
            
            <h3>Total Member: ({cart.length})</h3>
            <hr/>
            {
                props.cart.map( user => {
                    return (
                        <h6> <img src={user.img} alt=""/> {user.name} - ${user.salary}<hr/></h6>
                    )
                })
            }
            
            <h4 style={{color: '#020e3a', fontWeight: '700'}}>Total Salary: ${total}</h4>
        </div>
    );
};

export default Cart;