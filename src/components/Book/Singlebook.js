import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Singlebook.css'


const Singlebook = (props) => {
//   const {handleAddToCart}=props;

    const{book,handleAddToCart}=props;
   
    const{image,name,price}=book;
    return (
        <div className='book' >
            
            <img src={image} alt="" />
            <p> Name: {name}</p>
            <p> Price:$ {price}</p>
            
            <button onClick={()=>handleAddToCart(book)} >Add To Cart   <FontAwesomeIcon className='font-icon' icon={faShoppingCart}></FontAwesomeIcon> </button>
            
            
        </div>
    );
};

export default Singlebook;