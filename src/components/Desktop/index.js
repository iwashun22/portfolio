import React from 'react';
import Background from './Background';
import NavBar from './Navbar';
import Body from './Body';

const index = () => {
   return (
      <React.Fragment>
         <Background />
         <NavBar />
         <Body />
      </React.Fragment>
   )
}

export default index