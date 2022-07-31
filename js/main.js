//loader
   let loader = document.getElementById('preloader');
   window.addEventListener('load', function () { 
        loader.style.display = 'none';
  });
//loader

//  scroll-up 
 var btn = $('#button');
 $(window).scroll(function () {
 if ($(window).scrollTop() > 490) {
     btn.addClass('show');

   } else {
     btn.removeClass('show');
   }
 });
 btn.on('click', function (e) {
   e.preventDefault();
  $('html, body').animate({ scrollTop: 0 }, '300');
 });
// //    scroll-up 

// // animated hamburger icon
 $(document).ready($(function () {
   let navBtn = $('.navbar-toggler');
   $(navBtn).click(function () {
     $(navBtn).toggleClass('active-hamburger');
   });
 }));
// animated hamburger icon


//=========== Active navbar Link in multi pages =============
const currentLocation = location.href;
const menuItem = document.querySelectorAll(".navbar-nav .nav-item .nav-link");
const menuLength = menuItem.length;
for (let i = 0; i < menuLength; i++) {
  if (menuItem[i].href === currentLocation) {
    menuItem[i].className = "nav-link active";
  }
}
//=========== Active navbar Link in multi pages =============