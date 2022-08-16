import React from 'react';

import { dataName } from '../Navbar';

import Section from './Section';
import About from './About';
import Tools from './Tools';
import Works from './Works';

const index = () => {
   return (
      <>
         <Section hide={false} dataId={dataName.about} component={<About/>}/>
         <Section hide={true} dataId={dataName.tools} component={<Tools/>}/>
         <Section hide={true} dataId={dataName.works} component={<Works/>}/>
      </>
   );
}

export default index;