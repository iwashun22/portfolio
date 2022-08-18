import React from 'react';

import { navList } from '../Navbar';

import Section from './Section';
import About from './About';
import Tools from './Tools';
import Works from './Works';

const index = () => {
   return (
      <>
         <Section hide={false} dataId={navList.about} component={<About/>}/>
         <Section hide={true} dataId={navList.tools} component={<Tools/>}/>
         <Section hide={true} dataId={navList.works} component={<Works/>}/>
      </>
   );
}

export default index;