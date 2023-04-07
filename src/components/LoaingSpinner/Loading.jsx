import React from 'react';

const Loading = () => {
    return (
        <div className='flex justify-center items-center gap-1 h-[calc(100vh-80px)]'>
            <p className='text-6xl font-semibold '>L</p>
            <p className='border-8 border-sky-600 rounded-full h-16 w-16 border-dotted animate-spin'></p>
            <p className='text-6xl font-semibold'>ading...</p>
        </div>
    );
};

export default Loading;