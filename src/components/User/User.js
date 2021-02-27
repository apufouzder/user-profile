import React, { useState } from 'react';
import './User.css';

const User = (props) => {
    const { name, img, phone, salary, email } = props.user;

    return (
        <div className="user-container">
            <img src={img} alt="" />
            <h5><strong style={{color: '#020e3a'}}>Name</strong>: {name}</h5>
            <p><strong style={{color: '#020e3a'}}>Email</strong>: {email}</p>
            <p><strong style={{color: '#020e3a'}}>Phone</strong>: {phone}</p>
            <p><strong style={{color: '#020e3a'}}>Salary</strong>: {salary}</p>
            <button onClick={() => props.handleAddCart(props.user)}>Add Me</button>
        </div>
    );
};

export default User;