const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

var coment = [ 
	{"name": "Tanuj Gapta", "date": "10 Apr, 2016,", "body": "this is acoment1"}
];

for(var i=0; i<coment.length;i++){
	var html = "<div class='comentBox'><div class'leftpanelImg'><img src='https://placeholdit.imgix.net/~text=100&h="
}