import React from 'react';
import $ from 'jquery';

import './Section.scss';

const Section = ({ hide, dataId, component, classes }) => {
   return (
      <section 
         className={
            "page" + " " + (hide ? "hide " : " ") + classes
         } 
         data-section-id={dataId}
      >
         {
            component
         }
      </section>
   )
}

export default Section