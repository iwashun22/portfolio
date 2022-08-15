import React from 'react';
import NavBar from './navbar';
// import Body from './body';
import './dark-light-mode.scss';
import './mobile-structure.scss';
import './util/general.scss';

const App = () => {
   return (
      <React.StrictMode>
         <NavBar />
         {/* TODO: make Body */}
      </React.StrictMode>
   )
}

export default App;