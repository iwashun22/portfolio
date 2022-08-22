import React from 'react';
import Background from './Background';
import NavBar from './Navbar';
import Body from './Body';

import './util/general.scss';
import './App.scss';

const App = () => {
   return (
      <React.Fragment>
         <Background />
         <NavBar />
         <Body />
      </React.Fragment>
   )
}

export default App