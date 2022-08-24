import React, { useState, useEffect } from 'react';
import $ from 'jquery';

import './ToggleButton.scss';

const ToggleButton = () => {
   const [checked, setChecked] = useState();
   const toggleChange =  () => {
      if(checked) {
         $('#root').removeClass('dark');
      } else {
         $('#root').addClass('dark');
      }
      setChecked(!checked);
   }
   return (
      <div className="right">
         <p>{checked ? 'darkmode' : 'lightmode'}</p>
         <div>
            <label className="switch" id="toggle-mode">
               <input 
                  type="checkbox"
                  defaultChecked={checked}
                  onClick={() => {
                     toggleChange()
                  }}
               />
               <span className="slider"></span>
            </label>
         </div>
      </div>
   )
}

export default ToggleButton