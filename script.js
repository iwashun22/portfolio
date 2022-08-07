//* Toggle switch - Darkmode || Lightmode
const toggleMode = $('#toggle-mode input');
toggleMode.on('click', function() {
   $('#root').toggleClass('dark');
})


//* Navbar - Background color
const navbars = $('.navbar-nav');
navbars.on('click', function() {
   navbars.removeClass('gray');
   $(this).addClass('gray');
})