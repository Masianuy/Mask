'use strict';
const nav = document.getElementById('nav');
window.onscroll = () => {
  if(window.pageYOffset > 50) {
    nav.style.backgroundColor = '#ffffffe0';
  } else {
    nav.style.backgroundColor = 'transparent';
  }
}

const humburger = document.getElementById('humburger');
const iconHumb = document.getElementById('icon-humburger');
const iconClose = document.getElementById('icon-close');
const phoneNav = document.getElementById('inner-nav');

humburger.addEventListener('click', function() {
  if(humburger.classList.contains('open')) {
    humburger.classList.remove('open');
    phoneNav.style.display = 'none';
    iconClose.style.display = 'none';
    iconHumb.style.display = 'block';
  } else {
    humburger.classList.add('open');
    iconHumb.style.display = 'none';
    iconClose.style.display = 'block';
    phoneNav.style.display = 'flex';
  }
})

const getTagForYear = document.getElementById('year');
const getCurrentYear = new Date();
getTagForYear.textContent = getCurrentYear.getFullYear();