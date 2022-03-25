import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Singlebook.css'


const Singlebook = (props) => {
    console.log(props)
    const{image,name,price}=props.book;
    return (
        <div className='book' >
            
            <img src={image} alt="" />
            <p> Name: {name}</p>
            <p> Price:$ {price}</p>
            <p>{props.book.id}</p>
            <button>Add To Cart   <FontAwesomeIcon className='font-icon' icon={faShoppingCart}></FontAwesomeIcon> </button>
            
            
        </div>
    );
};

export default Singlebook;