import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import responsiveEvent from '../../util/responsive-event';
// import { randomBytes } from 'crypto';

import Navigator from './Navigator';
import ToggleButton from './ToggleButton';
import AboutMe from './icons/address-card-solid.svg';
import Tools from './icons/network-wired-solid.svg';
import Works from './icons/book-atlas-solid.svg';

import './index.scss';
// import '../util/general.scss';

function navSection({ title, imageSrc }) {
   return {
      id: (Math.random() * 10000).toString(16).replace(".", ""),
      title: title || "",
      imageSrc: imageSrc || null,
      toString: function() {
         return this.id;
      }
   }
}

export const navList = {
   about: navSection({ title: 'About Me', imageSrc: AboutMe }),
   tools: navSection({ title: 'Tools', imageSrc: Tools }),
   works: navSection({ title: 'Works', imageSrc: Works }),

}

const index = () => {
   const event = responsiveEvent();
   // console.log(event);
   useEffect(() => {
      const navbars = $('.navbar-nav');
      navbars.on(event, function() {
         navbars.removeClass('checked');
         $(this).addClass('checked');
         const sectionId = $(this).attr('data-point-to-section-id');
         $('.page').addClass('hide');
         //! this part is related to components/Desktop/Body/index.js
         $(`[data-section-id~="${sectionId}"]`).removeClass('hide');
      })
   })
   return (
      <div id="navbar">
         {
            Object.keys(navList).map((key, index) => {
               return <Navigator 
                        key={navList[key].id}
                        dataSectionId={navList[key].id}
                        name={navList[key].title}
                        imageSrc={navList[key].imageSrc}
               />
            })
         }
         <ToggleButton />
      </div>
   )
}

export default index;