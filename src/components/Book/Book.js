import React, { useEffect, useState } from 'react';
import Singlebook from './Singlebook';
import './Book.css'
import Cart from './Cart';

const Book = () => {
    const[books,setBook]=useState([]);
    const [cart,setCart]=useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setBook(data));
    },[])

    const handleAddToCart=(book)=>{
        // console.log(book);
        const newCart=[...cart,book];
        setCart(newCart);
    }
    
   

    return (
        <div className='container' >
            <div className='books'>
            {
                books.map(book=> <Singlebook 
                    key={book.id}

                    book={book}
                    handleAddToCart={handleAddToCart}
                    ></Singlebook> )
            }
            </div>
            <div>
                {/* <p>item{cart.length}</p> */}
                <Cart   cart={cart} ></Cart>
                
            </div>
            
            
        </div>
    );
};

export default Book;