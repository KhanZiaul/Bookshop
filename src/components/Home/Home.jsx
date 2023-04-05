import React from 'react';
import Lottie from "lottie-react";
import bookAnimation from "../../assets/books.json";
const Home = () => {
    return (
        <div className='flex'>
           <div>

           </div>
           <div >
           <Lottie className='w-[40%]' animationData={bookAnimation} loop={true} />
           </div>
        </div>
    );
};

export default Home;