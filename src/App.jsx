import React from 'react';
import Nav from './components/Header/Nav';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div className='w-[95%] mx-auto'>
     <Nav></Nav>
     <Outlet></Outlet>
    </div>
  );
};

export default App;