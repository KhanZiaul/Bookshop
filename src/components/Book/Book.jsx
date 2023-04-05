import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Book = () => {
    const bookDetails = useLoaderData()
    console.log(bookDetails)
    const { image, authors, publisher, price, rating, year, title, desc } = bookDetails;
    return (
        <div className='border-2 mx-auto flex mt-7 px-6'>
            <div className='w-[40%]'>
                <img src={image} alt="no image" />
            </div>
            <div className=''>
                <p className='text-4xl font-semibold mb-3'>{title}</p>
                <p>Authors : {authors}</p>
                <p>Publisher : {publisher}</p>
                <p>Rating : {rating}</p>
                <p className='mb-3'>Year : {year}</p>
                <p className='mb-5'>{desc.slice(0, 150) + ".........."}</p>
 
            </div>
        </div>
    );
};

export default Book;