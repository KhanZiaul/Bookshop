import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Book = () => {
    const bookDetails = useLoaderData()
    console.log(bookDetails)
    const {image , authors , publisher , price , rating , year , title , desc} = bookDetails;
    return (
        <div className='border-2 w-[60%] mx-auto flex mt-7'>
            <div>
                <img src={image} alt="" />
            </div>
            <div>

            </div>

        </div>
    );
};

export default Book;