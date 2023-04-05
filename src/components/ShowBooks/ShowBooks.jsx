import React from 'react';

const ShowBooks = ({book}) => {
    const {image , isbn13 , price , subtitle , title } = book
    return (
        <div>
            <img src={image} alt="" />
        </div>
    );
};

export default ShowBooks;