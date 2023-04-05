import React from 'react';
import Lottie from "lottie-react";
import bookAnimation from "../../assets/books.json";
import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div className='md:flex justify-between items-center gap-40 px-3'>
            <div >
                <div className="bg-yellow-500 inline-block rounded-xl px-2 mb-5">ON SALE!</div>

                <h2 className='text-4xl font-bold mb-5'>A reader lives a <br></br>thousand lives <span className='text-sky-500'>before he dies</span></h2>
                <p className='mb-5'>Books are a uniquely portable magic. Books serve to show a man that <br></br> those original thoughts of his aren't very new after all. The man who <br></br> does not read good books is no better than the man who can't.</p>

                <div className='flex items-center gap-4'>
                    <Link to='/books'>
                        <div className='inline-flex gap-3 bg-sky-400 text-white rounded-md   px-5 py-3 hover:bg-sky-700'>
                            <button>View Store</button>
                            <ShoppingCartIcon className='h-6 w-6 '></ShoppingCartIcon>
                        </div>
                    </Link>
                    <Link to='/about'>
                        <p className='font-semibold cursor-pointer hover:text-sky-700'>Learn More</p>
                    </Link>
                </div>
            </div>
            <div >
                <Lottie className='w-full md:w-[500px]' animationData={bookAnimation} loop={true} />
            </div>
        </div>
    );
};

export default Home;