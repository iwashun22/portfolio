import React from 'react';

const Navigator = ({ imageSrc, dataSectionId, name }) => {
   return (
      <div className="navbar-nav" data-point-to-section-id={dataSectionId||""}>
         <div className="wrapper">
            <span>
               {
                  imageSrc ? 
                  <img src={imageSrc} className="icon" alt="icons"/>
                  :
                  null
               }
            </span>
            <span>
               <h3 className="animated-text-gradient">{name || "no name"}</h3>
            </span>
         </div>
      </div>
   )
}

export default Navigator;