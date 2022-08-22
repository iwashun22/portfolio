import React, { useState, useEffect } from 'react';

import './index.scss';

const index = () => {

   // initial event when document loads
   window.addEventListener('load', () => {
      const bg = document.querySelector('.background');
      let timeOut = true;
      document.addEventListener('mousemove', e => {
         if(timeOut) {
            const X = e.clientX;
            const Y = e.clientY;
            const span = document.createElement('span');
            span.className = 'mouse-cursor';
            span.style.top = Y + 'px';
            span.style.left = X + 'px';
            bg.appendChild(span);
            setTimeout(() => {
               bg.removeChild(span);
            }, 1000)

            timeOut = false;
            setTimeout(() => {
               timeOut = true;
            }, 100);
         }
      })
   })

   // adding event when re-render from Tablet (responsive page component)
   useEffect(() => {
      const bg = document.querySelector('.background');
      let timeOut = true;
      document.addEventListener('mousemove', e => {
         if(timeOut) {
            const X = e.clientX;
            const Y = e.clientY;
            const span = document.createElement('span');
            span.className = 'mouse-cursor';
            span.style.top = Y + 'px';
            span.style.left = X + 'px';
            bg.appendChild(span);
            setTimeout(() => {
               bg.removeChild(span);
            }, 1000)

            timeOut = false;
            setTimeout(() => {
               timeOut = true;
            }, 100);
         }
      })
   }, [])
   return (
      <div className="background">
         {/* <div className="cursor"></div> */}
         {/* <CreateRowsAndHexagons width={bgWidth} height={bgHeight} /> */}
      </div>
   )
}

export default index