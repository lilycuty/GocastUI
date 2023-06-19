'use strict';
const btnMenu = document.querySelector('.button-menu');
const sideBar = document.querySelector('.sidebar');

btnMenu.addEventListener('click', function () {
	sideBar.classList.toggle('active');
});
