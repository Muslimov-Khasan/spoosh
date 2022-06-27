"use strict";
let elSiteHeader = document.querySelector(".header");
let elHamburBtn = document.querySelector(".hamburg__btn");

// console.log(elSiteHeader , elHamburBtn);

elHamburBtn.addEventListener('click', function(){
  elSiteHeader.classList.toggle("site-header--open");
});