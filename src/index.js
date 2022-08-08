import '../css/general.css';
import '../css/navbar-toggle.css';
import '../css/section-page.css';

import $ from 'jquery';

//* Toggle switch - Darkmode || Lightmode
const toggleMode = $('#toggle-mode input');
toggleMode.on('click', function() {
   $('#root').toggleClass('dark');
})


//* Navbar - Background color & display section
const navbars = $('.navbar-nav');
navbars.on('click', function() {
   navbars.removeClass('checked');
   $(this).addClass('checked');
   const sectionId = $(this).attr('data-section-name');
   $('.page').addClass('hide');
   $(`[data-id~="${sectionId}"]`).removeClass('hide');
})