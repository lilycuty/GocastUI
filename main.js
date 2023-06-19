'use strict';
const btnMenu = document.querySelector('.button-menu');
const sideBar = document.querySelector('.sidebar');
const btnUnion = document.querySelector('.button-union');
const mainLeft = document.querySelector('.main-content-left');
const mainRight = document.querySelector('.main-content-right');
const body = document.querySelector('body');
btnMenu.addEventListener('click', function () {
	sideBar.classList.toggle('active');
});

btnUnion.addEventListener('click', function () {
	mainLeft.classList.toggle('hidden');
	mainRight.classList.toggle('hidden');
});
