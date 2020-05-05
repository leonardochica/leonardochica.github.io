// Navbar burger menu
// var navbar_popup = document.getElementById("navbar-popup");

// var navbar_close_icon = document.getElementById("navbar--close-icon");

// var navbar_checkbtn = document.getElementById("burger-menu--check");

// var drones_page = document.getElementById("drones");

// if (drones_page) {

// 	navbar_checkbtn.onclick = function () {
// 		navbar_popup.style.display = "block";
// 	}

// 	navbar_close_icon.onclick = function () {
// 		navbar_popup.style.display = "none";
// 	}

// 	window.onclick = function (event) {
// 		if (event.target == this.navbar_popup) {
// 			navbar_popup.style.display = "none";

// 		}
// 	}
// }
var sort__window = document.querySelector('.collection__sort');

var sort_close_icon = document.getElementById("sort__close-icon");

var sort_link = document.querySelector('.sort__link');

sort_link.addEventListener('click', () => {
	sort__window.classList.toggle('collection__sort--visible');
})