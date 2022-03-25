import React, { useEffect, useState } from 'react';
import Singlebook from './Singlebook';
import './Book.css'

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
                <h3>some is the better than nothing </h3>

            </div>
            
        </div>
    );
};

export default Book;