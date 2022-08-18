import React from 'react'

import './Section.scss';

const Section = ({ hide, dataId, component }) => {
   return (
      <section className={`page ${hide ? "hide" : ""}`} data-section-id={dataId}>
         {
            component
         }
      </section>
   )
}

export default Section