import React from 'react';

import ScrollParagraph from './ScrollParagraph';

import './index.scss';

const About = () => {
   return (
      <>
         <div className="container-left">
            {/* <div> */}
               <h1 className="headers">About Me</h1>
               <div>
                  <ScrollParagraph />
               </div>
            {/* </div> */}
         </div>
         <div className="container-right">

         </div>
      </>
   )
}

export default About;