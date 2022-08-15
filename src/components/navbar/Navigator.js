import React from 'react';

const Navigator = props => {
   const { imageSrc, dataSectionName, name } = props;
   return (
      <div className="navbar-nav" data-section-name={dataSectionName||"no-name"}>
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
               <h3>{name || "no text"}</h3>
            </span>
         </div>
      </div>
   )
}

export default Navigator;