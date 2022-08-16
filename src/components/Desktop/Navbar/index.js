import React, { useEffect } from 'react';
import $ from 'jquery';
import responsiveEvent from '../../util/responsive-event';
import Navigator from './Navigator';
import AboutMe from './icons/address-card-solid.svg';
import Tools from './icons/network-wired-solid.svg';
import Works from './icons/book-atlas-solid.svg';

import './navbar-toggle.scss';
// import '../util/general.scss';

export const dataName = {
   about: 'about-me',
   tools: 'tools',
   works: 'works',

}

const index = () => {
   const event = responsiveEvent();
   useEffect(() => {
      const toggleMode = $('#toggle-mode input');
      toggleMode.on(event, function() {
         $('#root').toggleClass('dark');
      })

      const navbars = $('.navbar-nav');
      navbars.on(event, function() {
         navbars.removeClass('checked');
         $(this).addClass('checked');
         const sectionId = $(this).attr('data-point-to-section-name');
         $('.page').addClass('hide');
         //! this part is related to components/Desktop/Body/index.js
         $(`[data-section-name~="${sectionId}"]`).removeClass('hide');
      })
   }, [])
   return (
      <div id="navbar">
         <Navigator imageSrc={AboutMe} dataSectionName={dataName.about} name="About Me" />
         <Navigator imageSrc={Tools} dataSectionName={dataName.tools} name="Tools" />
         <Navigator imageSrc={Works} dataSectionName={dataName.works} name="Works" />
         <Navigator />
         <div className="right bottom">
            <p>light mode</p>
            <div>
               <label className="switch" id="toggle-mode">
                  <input type="checkbox"/>
                  <span className="slider"></span>
               </label>
            </div>
         </div>
      </div>
   )
}

export default index;