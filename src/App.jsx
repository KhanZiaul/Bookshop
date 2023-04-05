import React from 'react';
import Nav from './components/Header/Nav';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className='w-[95%] mx-auto mt-2 '>
     <Nav></Nav>
     <Outlet></Outlet>
     <Footer></Footer>
    </div>
  );
};

export default App;