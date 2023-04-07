import React from 'react';
import { useLoaderData , useNavigation} from 'react-router-dom';
import ShowBooks from '../ShowBooks/ShowBooks';
import Loading from '../LoaingSpinner/Loading';

const Books = () => {
    
    const loading = useNavigation()
    if (loading.state === 'loading') {
        return <Loading />
    }

    const loadData = useLoaderData();
    // console.log(loadData.books)
    return (
        <div className='px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-7'>
            {
                loadData.books.map(book => <ShowBooks key={book.isbn13} book={book}></ShowBooks>)
            }
        </div>
    );
};

export default Books;