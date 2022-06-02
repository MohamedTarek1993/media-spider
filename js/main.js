//loader
  let loader = document.getElementById('preloader');
  window.addEventListener('load', function () {  loader.style.display = 'none';
 });
//loader

//  scroll-up 
var btn = $('#button');
var navbar = $('#navbar')
var lang = $('.navbar  .dropdown');
var inquery = $('.navbar  .inquery_btn ');
$(window).scroll(function () {
  if ($(window).scrollTop() > 490) {
    btn.addClass('show');
    navbar.addClass('change');
    lang.css('display', 'none');
    inquery.css('display', 'none');

  } else {
    btn.removeClass('show');
    navbar.removeClass('change');
    lang.css('display', 'block');
    inquery.css('display', 'flex');
  }
});
btn.on('click', function (e) {
  e.preventDefault();
  $('html, body').animate({ scrollTop: 0 }, '300');
});
//    scroll-up 
// animated hamburger icon
$(document).ready($(function () {
  let navBtn = $('.navbar-toggler');
  $(navBtn).click(function () {
    $(navBtn).toggleClass('active-hamburger');
  });
}));
// animated hamburger icon

//    light&& dark 

// check for saved 'darkMode' in localStorage
// let darkMode = localStorage.getItem('darkMode');
// const darkModeToggle = document.getElementById('toggle');
// const dark = document.getElementById('dark');
// const light = document.getElementById('light');
// const logoLight = document.getElementById('logoLight');
// const logoDark = document.getElementById('logoDark');
// const enableDarkMode = () => {
//   // 1. Add the class to the body
//   document.body.classList.add('darkmode');
//    // 2. toggle classes
//   dark.style.display = "none";
//   light.style.display = "block";
//   // 3. Update darkMode in localStorage
//   localStorage.setItem('darkMode', 'enabled');


// }
// const disableDarkMode = () => {
//   // 1. Remove the class from the body
//   document.body.classList.remove('darkmode');
//        // 2. toggle classes

//   light.style.display = "none";
//   dark.style.display = "block";
//   // 3. Update darkMode in localStorage 
//   localStorage.setItem('darkMode', null);

// }

// // If the user already visited and enabled darkMode
// // start things off with it on
// if (darkMode === 'enabled') {
//   enableDarkMode();
// }
// // toggle icon
// // When someone clicks the button
// darkModeToggle.addEventListener('click', () => {
//   // get their darkMode setting
//   darkMode = localStorage.getItem('darkMode');
//   logoLight.style.display = "block";
//   logoDark.style.display = "none";
//   //  light.style.display="block";
//   //  dark.style.display="none";


//   // if it not current enabled, enable it
//   if (darkMode !== 'enabled') {
//     enableDarkMode();
//     // if it has been enabled, turn it off  
//     logoLight.style.display = "none";
//     logoDark.style.display = "block";
//     //  dark.style.display="block";
//     //  light.style.display="none";


//   } else {
//     disableDarkMode();
//     // dark.style.display="block";
//     // light.style.display="none";
//     // dark.style.display="none";

//   }
// });

// //    light&& dark


//Bothelp.io widget 
 !function () { var e = { "buttons": [{ "type": "whatsapp", "token": "01093140277" }], "color": "#F0645A", "position": "left", "bottomSpacing": "30",  "displayOn": "everywhere", "lang": "en" }, t = document.location.protocol + "//bothelp.io", o = document.createElement("script"); o.type = "text/javascript", o.async = !0, o.src = t + "/widget-folder/widget-page.js", o.onload = function () { new BhWidgetPage.init(e) }; var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(o, n) }();
///Bothelp.io widget 

//download file
var doc = new jsPDF();
var specialElementHandlers = {
  '#editor': function (element, renderer) {
    return true;
  }
};

$('#cmd').click(function () {
  doc.fromHTML($('#content').html(), 15, 15, {
    'width': 270,
    'elementHandlers': specialElementHandlers
  });
  doc.save('cv.pdf');
});
