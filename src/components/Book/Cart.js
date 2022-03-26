import React, { useState } from 'react';
import './Cart.css'
const Cart = (props) => {
    const {cart,removeCart}=props;

    console.log(cart);

    let name='';
    var arr=[];
    

    for(const book of cart){
            name=(name+ book.name);
            arr.push(name);
        
    }
    
   
    function random(arr){
        
        var item = arr[Math.floor(Math.random()*arr.length)];
        
            alert(item); 
    }

        
         
    


    return (
        <div className='Cart' >
            
            <h1>Selected Cloths :{props.cart.length}</h1>
            <h2>Name:</h2> <p className='li' >{name}</p> <br /><br /><br />
                <button onClick={()=>random(arr)} >Choose 1 for me</button> <br />  <br />
                <button onClick={()=>removeCart()} >Choose Again</button>
               

        </div>
    );
};

export default Cart;