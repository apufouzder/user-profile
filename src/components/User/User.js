import React, { useState } from 'react';
import './User.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faDollarSign, faEnvelope, faPhone, faPlus, faUsers } from '@fortawesome/free-solid-svg-icons';

const User = (props) => {
    const { name, img, phone, salary, email } = props.user;

    return (
        <div className="user-container">
            <img src={img} alt="" />
            <h5> <FontAwesomeIcon icon={faUsers} /> {name}</h5>
            <p> <FontAwesomeIcon icon={faEnvelope} /> {email}</p>
            <p> <FontAwesomeIcon icon={faPhone} /> {phone}</p>
            <h6> <FontAwesomeIcon icon={faDollarSign} /> {salary}</h6>
            <button onClick={() => props.handleAddCart(props.user)}> <FontAwesomeIcon icon={faPlus} /> Add Me</button>
        </div>
    );
};

export default User;