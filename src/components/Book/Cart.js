import React, { useState } from 'react';
import './Cart.css'
const Cart = (props) => {
    console.log(props);

    return (
        <div className='Cart' >
            
            <h1>Selected Cloths :{props.cart.length}</h1><br /> <br /><br /><br />
                <button>Choose 1 for me</button> <br />  <br />
                <button>Choose Again</button>

        </div>
    );
};

export default Cart;