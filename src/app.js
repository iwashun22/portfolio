import $ from 'jquery'

// console.log(navigator.userAgent);

const isPhoneOrTablet = navigator.userAgent.search(/iPhone|Android|iPad/) !== -1;
const responsiveEvent = isPhoneOrTablet ? 'touch' : 'click';

//* Toggle switch - Darkmode || Lightmode
const toggleMode = $('#toggle-mode input');
toggleMode.on(responsive, function() {
   $('#root').toggleClass('dark');
})


//* Navbar - Background color & display section
const navbars = $('.navbar-nav');
navbars.on(responsive, function() {
   navbars.removeClass('checked');
   $(this).addClass('checked');
   const sectionId = $(this).attr('data-section-name');
   $('.page').addClass('hide');
   $(`[data-id~="${sectionId}"]`).removeClass('hide');
})

const navbar = $('#navbar');
navbar.on(responsive, function() {
   $(this).addClass('open')
})
document.addEventListener(responsive, e => {
   // console.log(e.clientX > $('#navbar').width());
   const nb = $('#navbar');
   const navbarPositionX = nb.width();
   if(e.clientX > navbarPositionX) {
      nb.removeClass('open');
   }
})