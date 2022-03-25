import React, { useEffect, useState } from 'react';
import Singlebook from './Singlebook';
import './Book.css'
import Cart from './Cart';

const Book = () => {
    const[books,setBook]=useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setBook(data));
    },[])

    return (
        <div className='container' >
            <div className='books'>
            {
                books.map(book=> <Singlebook book={book} ></Singlebook> )
            }
            </div>
            <div>
                <Cart></Cart>
                
            </div>
            
            
        </div>
    );
};

export default Book;