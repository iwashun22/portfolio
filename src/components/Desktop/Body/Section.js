import React from 'react'

const Section = ({ hide, dataId, component }) => {
   return (
      <section class={`page ${hide ? "hide" : ""}`} data-section-name={dataId}>
         {
            component
         }
      </section>
   )
}

export default Section