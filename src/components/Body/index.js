import React from 'react';

import { navList } from '../Navbar';

import Section from './Section';
import About from './About';
import Tools from './Tools';
import Works from './Works';

import './index.scss';

const index = () => {
   return (
      <>
         <Section 
            hide={false} 
            dataId={navList.about} 
            component={<About/>}
            classes="flex"
         />
         <Section 
            hide={true} 
            dataId={navList.tools} 
            component={<Tools/>}
            classes=""
         />
         <Section 
            hide={true} 
            dataId={navList.works} 
            component={<Works/>}
            classes=""
         />
      </>
   );
}

export default index;