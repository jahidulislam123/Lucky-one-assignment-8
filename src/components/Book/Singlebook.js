import React from 'react';
import './Singlebook.css'

const Singlebook = (props) => {
    console.log(props)
    return (
        <div className='book' >
            
            <img src={props.book.image} alt="" />
            <p> Name: {props.book.name}</p>
            <p> Price:$ {props.book.price}</p>
            <p>{props.book.id}</p>
            <button>Add To Cart</button>
            
            
        </div>
    );
};

export default Singlebook;