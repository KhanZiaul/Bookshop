import React, { useState } from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import './Book.css'
import Loading from '../LoaingSpinner/Loading';

const Book = () => {
    const loading = useNavigation()
    if (loading.state === 'loading') {
        return <Loading />
    }

    const bookDetails = useLoaderData()
    // console.log(bookDetails)
    const { image, authors, publisher, price, rating, year, title, desc } = bookDetails;
    const [less, setMore] = useState(false)

    return (
        <div className='border-2 mx-auto mt-7 p-5  md:grid gap-10 book '>
            <div>
                <img className='w-full md:h-[100vh]' src={image} alt="no image" />
            </div>
            <div className='mt-20'>
                <div>
                    <p className='text-4xl font-bold mb-3'>{title}</p>
                    <p>Authors : {authors}</p>
                    <p>Publisher : {publisher}</p>
                    <p>Rating : {rating}</p>
                    <p className='mb-3'>Year : {year}</p>
                </div>
                <div className='flex'>
                    <div>
                        {
                            less ? <p className='mb-5'>{desc}.....<span className='text-sky-500 cursor-pointer' onClick={() => setMore(!less)}>Read Less</span></p> : <p className='mb-5'>{desc.slice(0, 150)}.....<span className='text-sky-500 cursor-pointer' onClick={() => setMore(!less)}>Read More</span></p>
                        }
                    </div>
                </div>

                <div className='flex items-center gap-3'>
                    <button className='inline-flex gap-3 bg-sky-400 text-white rounded-md px-5 py-3 hover:bg-sky-700 drop-shadow-md'>Buy Now</button>
                    <p className='font-bold text-gray-700'>Price: {price}</p>
                </div>
            </div>
        </div>
    );
};

export default Book;