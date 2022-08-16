import React from 'react';

const Navigator = ({ imageSrc, dataSectionName, name }) => {
   return (
      <div className="navbar-nav" data-point-to-section-name={dataSectionName||""}>
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
               <h3>{name || "no name"}</h3>
            </span>
         </div>
      </div>
   )
}

export default Navigator;