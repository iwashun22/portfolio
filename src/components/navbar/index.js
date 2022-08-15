import React, { useEffect } from 'react';
import $ from 'jquery';
import responsiveEvent from '../util/responsive-event';
import Navigator from './Navigator';
import AboutMe from './icons/address-card-solid.svg';
import Tools from './icons/network-wired-solid.svg';
import Products from './icons/book-atlas-solid.svg';

import './navbar-toggle.scss';
import '../util/general.scss';

const NavBar = () => {
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
         const sectionId = $(this).attr('data-section-name');
         $('.page').addClass('hide');
         $(`[data-id~="${sectionId}"]`).removeClass('hide');
      })

      const navbar = $('#navbar');
      navbar.on(event, function() {
         $(this).addClass('open')
      })
      document.addEventListener(event, e => {
         // console.log(e.clientX > $('#navbar').width());
         const nb = $('#navbar');
         const navbarPositionX = nb.width();
         if(e.clientX > navbarPositionX) {
            nb.removeClass('open');
         }
      })
   }, [])
   return (
      <div id="navbar">
         <Navigator imageSrc={AboutMe} dataSectionName="about-me" name="About Me" />
         <Navigator imageSrc={Tools} dataSectionName="tools" name="Tools" />
         <Navigator imageSrc={Products} name="Products" />
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

export default NavBar;