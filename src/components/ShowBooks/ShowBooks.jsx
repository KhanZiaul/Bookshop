import React from 'react';
import { Link } from 'react-router-dom';

const ShowBooks = ({book}) => {
    const {image , isbn13 , price , subtitle , title } = book
    return (
        <Link to={`/book/${isbn13}`} className='relative rounded-md hover:-translate-y-4 duration-300'>
        <div className='border-2 border-gray-100 drop-shadow-lg'>
            <img src={image} alt="" />
        </div>
        <div className='absolute top-0 flex flex-col justify-between bg-zinc-800 text-white inset-0 rounded-md opacity-0 hover:opacity-75 p-5'>
            <h2 className='text-xl font-semibold mb-5'>{title}</h2>
            <h2 className='font-semibold'>{subtitle.slice(0,25) + "......"}</h2>
            <h2 className='font-semibold'>{price}</h2>
        </div>
        </Link>
    );
};

export default ShowBooks;