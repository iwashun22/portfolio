import React, { useEffect, useState } from 'react';
import Desktop from './Desktop';
import Tablet from './Tablet';

import './dark-light-mode.scss';
import './util/general.scss';

const App = () => {
   const [windowWidth, setWindowWidth] = useState(window.innerWidth);
   useEffect(() => {
      window.addEventListener('resize', e => {
         setWindowWidth(window.innerWidth);
      })
   }, [windowWidth]);
   return (
      <React.StrictMode>
         {
            windowWidth < 740 ?
               <h1>{windowWidth}</h1>
               /* TODO: mobile structure */
            :
               <Desktop />
         }
      </React.StrictMode>
   )
}

export default App;