// Variables to get element with id for each page
var drones_page = document.getElementById("drones");

var cameras_page = document.getElementById("cameras");

var parts_tools_page = document.getElementById("parts_tools");

var accessories_page = document.getElementById("accessories");

var sale_page = document.getElementById("sale");


// Navbar burger menu
const nav = document.querySelector('.navbar');

var navbar_popup = document.getElementById("navbar-popup");

var navbar_close_icon = document.getElementById("navbar--close-icon");

var navbar_checkbtn = document.getElementById("burger-menu--check");

// Navbar at home page
var navbar_home_page = document.getElementById("navbar__home");


for (var item = 1; item <= 15; item++) {
	//=========================================
	//  VARIABLES 
	// ========================================

	// =====> DRONES <=======
	// var drones1_btn = document.getElementById("drones1--btn--quick"); =>BUTTON
	eval('var ' + 'drones' + item + '_btn = document.getElementById("drones' + item + '--btn--quick");');

	// var drones1_popup_window = document.getElementById("drones1--shopping-wd"); => POPUP WINDOW
	eval('var drones' + item + '_popup_window = document.getElementById("drones' + item + '--shopping-wd");');

	// var drones1_close_wdw = document.getElementById("drones1--close-icon"); => CLOSE ICON
	eval('var drones' + item + '_close_wdw = document.getElementById("drones' + item + '--close-icon");');


	// =====> CAMERAS <=======
	// Popup Window
	eval('var cameras' + item + '_popup_window = document.getElementById("cameras' + item + '--shopping-wd");');

	// Button
	eval('var ' + 'cameras' + item + '_btn = document.getElementById("cameras' + item + '--btn--quick");');

	// Close X icon
	eval('var cameras' + item + '_close_wdw = document.getElementById("cameras' + item + '--close-icon");');


	// =====> PARTS & TOOLS <=======
	// Popup Window
	eval('var parts_tools' + item + '_popup_window = document.getElementById("parts_tools' + item + '--shopping-wd");');

	// Button
	eval('var ' + 'parts_tools' + item + '_btn = document.getElementById("parts_tools' + item + '--btn--quick");');

	// Close X icon
	eval('var parts_tools' + item + '_close_wdw = document.getElementById("parts_tools' + item + '--close-icon");');


	// =====> ACCESSORIES <=======
	// Popup Window
	eval('var accessories' + item + '_popup_window = document.getElementById("accessories' + item + '--shopping-wd");');

	// Button
	eval('var ' + 'accessories' + item + '_btn = document.getElementById("accessories' + item + '--btn--quick");');

	// Close X icon
	eval('var accessories' + item + '_close_wdw = document.getElementById("accessories' + item + '--close-icon");');

	// =====> SALE <=======
	// Popup Window
	eval('var sale' + item + '_popup_window = document.getElementById("sale' + item + '--shopping-wd");');

	// Button
	eval('var ' + 'sale' + item + '_btn = document.getElementById("sale' + item + '--btn--quick");');

	// Close X icon
	eval('var sale' + item + '_close_wdw = document.getElementById("sale' + item + '--close-icon");');
}





// ===================================================
// FUNCTIONS TO DISPLAY POPUP WINDOW AND CLOSE IT WHEN CLICKING X OR OUTSIDE THE WINDOW | NAVBAR | SHOPPING WINDOW
// ===================================================


// Element where Hover effect is used to get dropdown lists
var navbar__dropdown_hover1 = document.getElementById("navbar__dropdown--hover1");
var navbar__dropdown_hover2 = document.getElementById("navbar__dropdown--hover2");
var navbar__dropdown_hover3 = document.getElementById("navbar__dropdown--hover3");

// Toggle navbar--visible class to make navbar visible
navbar_checkbtn.addEventListener('click', () => {
	nav.classList.toggle('navbar--visible');
})

// Remove navbar when click on X icon
navbar_close_icon.addEventListener('click', () => {
	nav.classList.remove('navbar--visible');
})


// Filters window for collection to display and hide => COLLECTION PAGES
var filters_window = document.querySelector('.collection__filters');

var filters_close_icon = document.getElementById("filters--close-icon");

var filters_link = document.querySelector('.filters--link');


// Sort options for collection to display and hide => COLLECTION PAGES
var sort_window = document.querySelector('.collection__sort');

var sort_close_icon = document.getElementById("sort__close-icon");

var sort_link = document.querySelector('.sort__link');



// ------------------------------------
// HOME PAGE
// ------------------------------------
if (navbar_home_page) {

	// For tablet landscape devices
	function media_queries_tablet_landscape(for_tablet_landscape_down) {
		if (for_tablet_landscape_down.matches) {

			// Remove navbar when window is clicked
			window.onclick = function (event) {
				if (event.target == this.navbar_popup) {
					nav.classList.remove('navbar--visible');
				}
			}


			// Remove dropdown hover effect in small devices in navbar
			navbar__dropdown_hover1.classList.remove("hover");
			navbar__dropdown_hover2.classList.remove("hover");
			navbar__dropdown_hover3.classList.remove("hover");

		}

		else {

			// Add class for hover effect in large screens for navbar
			navbar__dropdown_hover1.classList.add("hover");
			navbar__dropdown_hover2.classList.add("hover");
			navbar__dropdown_hover3.classList.add("hover");
		}
	}

	function media_queries_tablet_portrait(for_tablet_portrait_down) {
		if (for_tablet_portrait_down.matches) {


			// Grid section in home page to make it collapse when changing to large screen devices
			function collapse_grid() {
				var check_marks_grid = document.querySelectorAll('.grid-item--uncheck');
				for (var i = 0; i < check_marks_grid.length; i++) {
					check_marks_grid[i].checked = false;
				}
			}

			// Call collapse function
			collapse_grid();

		}
	}
}



// DRONES
if (drones_page) {

	function media_queries_tablet_landscape(for_tablet_landscape_down) {
		if (for_tablet_landscape_down.matches) {

			// Remove dropdown hover effect in small devices
			navbar__dropdown_hover1.classList.remove("hover");
			navbar__dropdown_hover2.classList.remove("hover");
			navbar__dropdown_hover3.classList.remove("hover");

			// ========= FILTERS => COLLECTION
			// Toggle/Show filter window when clicked in filters link
			filters_link.addEventListener('click', () => {
				filters_window.classList.toggle('collection__filters--visible');
				filters_close_icon.classList.toggle('close-window--visible');
			})

			// Close filter window when clicked on X
			filters_close_icon.addEventListener('click', () => {
				filters_window.classList.remove('collection__filters--visible');
				filters_close_icon.classList.remove('close-window--visible');
			})


			// ========= SORT => COLLECTION
			// Toggle/Show sort window when clicked in "sort by" link
			sort_link.addEventListener('click', () => {
				sort_window.classList.toggle('collection__sort--visible');
				sort_close_icon.classList.toggle('close-window--visible');
			})

			// Close sort window when clicked on X
			sort_close_icon.addEventListener('click', () => {
				sort_window.classList.remove('collection__sort--visible');
				sort_close_icon.classList.remove('close-window--visible');
			})
		}

		else {

			// Add class for hover effect in large screens
			navbar__dropdown_hover1.classList.add("hover");
			navbar__dropdown_hover2.classList.add("hover");
			navbar__dropdown_hover3.classList.add("hover");

			// ========= FILTERS => COLLECTION
			// Toggle/Show filter window when clicked in filters link
			filters_link.addEventListener('click', () => {
				filters_window.classList.toggle('collection__filters--visible');
				filters_close_icon.classList.toggle('close-window--visible');
			})

			// Close filter window when clicked on X
			filters_close_icon.addEventListener('click', () => {
				filters_window.classList.remove('collection__filters--visible');
				filters_close_icon.classList.remove('close-window--visible');
			})

			// ========= SORT => COLLECTION
			// Toggle/Show sort window when clicked in "sort by" link
			sort_link.addEventListener('click', () => {
				sort_window.classList.toggle('collection__sort--visible');
				sort_close_icon.classList.toggle('close-window--visible');
			})

			// Close sort window when clicked on X
			sort_close_icon.addEventListener('click', () => {
				sort_window.classList.remove('collection__sort--visible');
				sort_close_icon.classList.remove('close-window--visible');
			})
		}
	}

	// Drones1 popup window
	// -----------------------
	// When the user clicks on button
	drones1_btn.onclick = function () {
		drones1_popup_window.style.display = "block";
	}

	// Close window when clicking on X
	drones1_close_wdw.onclick = function () {
		drones1_popup_window.style.display = "none";
	}

	// Drones2 popup window
	// -----------------------
	drones2_btn.onclick = function () {
		drones2_popup_window.style.display = "block";
	}

	drones2_close_wdw.onclick = function () {
		drones2_popup_window.style.display = "none";
	}

	// Drones3 popup window
	// -----------------------
	drones3_btn.onclick = function () {
		drones3_popup_window.style.display = "block";
	}

	drones3_close_wdw.onclick = function () {
		drones3_popup_window.style.display = "none";
	}

	// Drones4 popup window
	// -----------------------
	drones4_btn.onclick = function () {
		drones4_popup_window.style.display = "block";
	}

	drones4_close_wdw.onclick = function () {
		drones4_popup_window.style.display = "none";
	}

	// Drones5 popup window
	// -----------------------
	drones5_btn.onclick = function () {
		drones5_popup_window.style.display = "block";
	}

	drones5_close_wdw.onclick = function () {
		drones5_popup_window.style.display = "none";
	}

	// Drones6 popup window
	// -----------------------
	drones6_btn.onclick = function () {
		drones6_popup_window.style.display = "block";
	}

	drones6_close_wdw.onclick = function () {
		drones6_popup_window.style.display = "none";
	}

	// Drones7 popup window
	// -----------------------
	drones7_btn.onclick = function () {
		drones7_popup_window.style.display = "block";
	}

	drones7_close_wdw.onclick = function () {
		drones7_popup_window.style.display = "none";
	}

	// Drones8 popup window
	// -----------------------
	drones8_btn.onclick = function () {
		drones8_popup_window.style.display = "block";
	}

	drones8_close_wdw.onclick = function () {
		drones8_popup_window.style.display = "none";
	}

	// Drones9 popup window
	// -----------------------
	drones9_btn.onclick = function () {
		drones9_popup_window.style.display = "block";
	}

	drones9_close_wdw.onclick = function () {
		drones9_popup_window.style.display = "none";
	}

	// Drones13 popup window
	// -----------------------
	drones13_btn.onclick = function () {
		drones13_popup_window.style.display = "block";
	}

	drones13_close_wdw.onclick = function () {
		drones13_popup_window.style.display = "none";
	}

	// Drones14 popup window
	// -----------------------
	drones14_btn.onclick = function () {
		drones14_popup_window.style.display = "block";
	}

	drones14_close_wdw.onclick = function () {
		drones14_popup_window.style.display = "none";
	}

	// Drones15
	// -----------------------
	// When the user clicks on button
	drones15_btn.onclick = function () {
		drones15_popup_window.style.display = "block";
	}

	// Close window when click on X
	drones15_close_wdw.onclick = function () {
		drones15_popup_window.style.display = "none";
	}


	// When click anywhere outside the container,close window
	window.onclick = function (event) {
		if (event.target == drones1_popup_window) {
			drones1_popup_window.style.display = "none";
		}
		if (event.target == drones2_popup_window) {
			drones2_popup_window.style.display = "none";
		}
		if (event.target == drones3_popup_window) {
			drones3_popup_window.style.display = "none";
		}
		if (event.target == drones4_popup_window) {
			drones4_popup_window.style.display = "none";
		}
		if (event.target == drones5_popup_window) {
			drones5_popup_window.style.display = "none";
		}
		if (event.target == drones6_popup_window) {
			drones6_popup_window.style.display = "none";
		}
		if (event.target == drones7_popup_window) {
			drones7_popup_window.style.display = "none";
		}
		if (event.target == drones8_popup_window) {
			drones8_popup_window.style.display = "none";
		}
		if (event.target == drones9_popup_window) {
			drones9_popup_window.style.display = "none";
		}
		if (event.target == drones13_popup_window) {
			drones13_popup_window.style.display = "none";
		}
		if (event.target == drones14_popup_window) {
			drones14_popup_window.style.display = "none";
		}
		if (event.target == drones15_popup_window) {
			drones15_popup_window.style.display = "none";
		}
		// Navbar close window
		if (event.target == this.navbar_popup) {
			nav.classList.remove('navbar--visible');
		}

		// Close filter window when clicked outside window
		if (event.target == this.filters_window) {
			this.filters_window.classList.remove('collection__filters--visible');
			filters_close_icon.classList.remove('close-window--visible');
		}

		// Close sort window when clicked outside window
		if (event.target == this.sort_window) {
			this.sort_window.classList.remove('collection__sort--visible');
			sort_close_icon.classList.remove('close-window--visible');
		}
	}
}




// CAMERAS
if (cameras_page) {


	function media_queries_tablet_landscape(for_tablet_landscape_down) {
		if (for_tablet_landscape_down.matches) {

			// Remove dropdown hover effect in small devices
			navbar__dropdown_hover1.classList.remove("hover");
			navbar__dropdown_hover2.classList.remove("hover");
			navbar__dropdown_hover3.classList.remove("hover");


			// ========= FILTERS => COLLECTION
			// Toggle/Show filter window when clicked in filters link
			filters_link.addEventListener('click', () => {
				filters_window.classList.toggle('collection__filters--visible');
				filters_close_icon.classList.toggle('close-window--visible');
			})

			// Close filter window when clicked on X
			filters_close_icon.addEventListener('click', () => {
				filters_window.classList.remove('collection__filters--visible');
				filters_close_icon.classList.remove('close-window--visible');
			})


			// ========= SORT => COLLECTION
			// Toggle/Show sort window when clicked in "sort by" link
			sort_link.addEventListener('click', () => {
				sort_window.classList.toggle('collection__sort--visible');
				sort_close_icon.classList.toggle('close-window--visible');
			})

			// Close sort window when clicked on X
			sort_close_icon.addEventListener('click', () => {
				sort_window.classList.remove('collection__sort--visible');
				sort_close_icon.classList.remove('close-window--visible');
			})

		}

		else {

			// Add class for hover effect in large screens
			navbar__dropdown_hover1.classList.add("hover");
			navbar__dropdown_hover2.classList.add("hover");
			navbar__dropdown_hover3.classList.add("hover");


			// ========= FILTERS => COLLECTION
			// Toggle/Show filter window when clicked in filters link
			filters_link.addEventListener('click', () => {
				filters_window.classList.toggle('collection__filters--visible');
				filters_close_icon.classList.toggle('close-window--visible');
			})

			// Close filter window when clicked on X
			filters_close_icon.addEventListener('click', () => {
				filters_window.classList.remove('collection__filters--visible');
				filters_close_icon.classList.remove('close-window--visible');
			})


			// ========= SORT => COLLECTION
			// Toggle/Show sort window when clicked in "sort by" link
			sort_link.addEventListener('click', () => {
				sort_window.classList.toggle('collection__sort--visible');
				sort_close_icon.classList.toggle('close-window--visible');
			})

			// Close sort window when clicked on X
			sort_close_icon.addEventListener('click', () => {
				sort_window.classList.remove('collection__sort--visible');
				sort_close_icon.classList.remove('close-window--visible');
			})
		}
	}



	// cameras1 popup window
	// -----------------------
	cameras1_btn.onclick = function () {
		cameras1_popup_window.style.display = "block";
	}

	cameras1_close_wdw.onclick = function () {
		cameras1_popup_window.style.display = "none";
	}

	// cameras2 popup window
	// -----------------------
	cameras2_btn.onclick = function () {
		cameras2_popup_window.style.display = "block";
	}

	cameras2_close_wdw.onclick = function () {
		cameras2_popup_window.style.display = "none";
	}

	// cameras3 popup window
	// -----------------------
	cameras3_btn.onclick = function () {
		cameras3_popup_window.style.display = "block";
	}

	cameras3_close_wdw.onclick = function () {
		cameras3_popup_window.style.display = "none";
	}

	// cameras4 popup window
	// -----------------------
	cameras4_btn.onclick = function () {
		cameras4_popup_window.style.display = "block";
	}

	cameras4_close_wdw.onclick = function () {
		cameras4_popup_window.style.display = "none";
	}

	// cameras5 popup window
	// -----------------------
	cameras5_btn.onclick = function () {
		cameras5_popup_window.style.display = "block";
	}

	cameras5_close_wdw.onclick = function () {
		cameras5_popup_window.style.display = "none";
	}

	// cameras6 popup window
	// -----------------------
	cameras6_btn.onclick = function () {
		cameras6_popup_window.style.display = "block";
	}

	cameras6_close_wdw.onclick = function () {
		cameras6_popup_window.style.display = "none";
	}

	// cameras7 popup window
	// -----------------------
	cameras7_btn.onclick = function () {
		cameras7_popup_window.style.display = "block";
	}

	cameras7_close_wdw.onclick = function () {
		cameras7_popup_window.style.display = "none";
	}

	// cameras8 popup window
	// -----------------------
	cameras8_btn.onclick = function () {
		cameras8_popup_window.style.display = "block";
	}

	cameras8_close_wdw.onclick = function () {
		cameras8_popup_window.style.display = "none";
	}

	// cameras9 popup window
	// -----------------------
	cameras9_btn.onclick = function () {
		cameras9_popup_window.style.display = "block";
	}

	cameras9_close_wdw.onclick = function () {
		cameras9_popup_window.style.display = "none";
	}



	// When click anywhere outside the container,close window
	window.onclick = function (event) {
		if (event.target == cameras1_popup_window) {
			cameras1_popup_window.style.display = "none";
		}
		if (event.target == cameras2_popup_window) {
			cameras2_popup_window.style.display = "none";
		}
		if (event.target == cameras3_popup_window) {
			cameras3_popup_window.style.display = "none";
		}
		if (event.target == cameras4_popup_window) {
			cameras4_popup_window.style.display = "none";
		}
		if (event.target == cameras5_popup_window) {
			cameras5_popup_window.style.display = "none";
		}
		if (event.target == cameras6_popup_window) {
			cameras6_popup_window.style.display = "none";
		}
		if (event.target == cameras7_popup_window) {
			cameras7_popup_window.style.display = "none";
		}
		if (event.target == cameras8_popup_window) {
			cameras8_popup_window.style.display = "none";
		}
		if (event.target == cameras9_popup_window) {
			cameras9_popup_window.style.display = "none";
		}
		// Navbar close window
		if (event.target == this.navbar_popup) {
			nav.classList.remove('navbar--visible');
		}


		// Close filter window when clicked outside window
		if (event.target == this.filters_window) {
			this.filters_window.classList.remove('collection__filters--visible');
			filters_close_icon.classList.remove('close-window--visible');
		}

		// Close sort window when clicked outside window
		if (event.target == this.sort_window) {
			this.sort_window.classList.remove('collection__sort--visible');
			sort_close_icon.classList.remove('close-window--visible');
		}
	}
}




// PARTS & TOOLS
if (parts_tools_page) {


	function media_queries_tablet_landscape(for_tablet_landscape_down) {
		if (for_tablet_landscape_down.matches) {


			// Remove dropdown hover effect in small devices
			navbar__dropdown_hover1.classList.remove("hover");
			navbar__dropdown_hover2.classList.remove("hover");
			navbar__dropdown_hover3.classList.remove("hover");


			// ========= FILTERS => COLLECTION
			// Toggle/Show filter window when clicked in filters link
			filters_link.addEventListener('click', () => {
				filters_window.classList.toggle('collection__filters--visible');
				filters_close_icon.classList.toggle('close-window--visible');
			})

			// Close filter window when clicked on X
			filters_close_icon.addEventListener('click', () => {
				filters_window.classList.remove('collection__filters--visible');
				filters_close_icon.classList.remove('close-window--visible');
			})


			// ========= SORT => COLLECTION
			// Toggle/Show sort window when clicked in "sort by" link
			sort_link.addEventListener('click', () => {
				sort_window.classList.toggle('collection__sort--visible');
				sort_close_icon.classList.toggle('close-window--visible');
			})

			// Close sort window when clicked on X
			sort_close_icon.addEventListener('click', () => {
				sort_window.classList.remove('collection__sort--visible');
				sort_close_icon.classList.remove('close-window--visible');
			})
		}

		else {

			// Add class for hover effect in large screens
			navbar__dropdown_hover1.classList.add("hover");
			navbar__dropdown_hover2.classList.add("hover");
			navbar__dropdown_hover3.classList.add("hover");


			// ========= FILTERS => COLLECTION
			// Toggle/Show filter window when clicked in filters link
			filters_link.addEventListener('click', () => {
				filters_window.classList.toggle('collection__filters--visible');
				filters_close_icon.classList.toggle('close-window--visible');
			})

			// Close filter window when clicked on X
			filters_close_icon.addEventListener('click', () => {
				filters_window.classList.remove('collection__filters--visible');
				filters_close_icon.classList.remove('close-window--visible');
			})


			// ========= SORT => COLLECTION
			// Toggle/Show sort window when clicked in "sort by" link
			sort_link.addEventListener('click', () => {
				sort_window.classList.toggle('collection__sort--visible');
				sort_close_icon.classList.toggle('close-window--visible');
			})

			// Close sort window when clicked on X
			sort_close_icon.addEventListener('click', () => {
				sort_window.classList.remove('collection__sort--visible');
				sort_close_icon.classList.remove('close-window--visible');
			})
		}
	}



	// parts_tools1 popup window
	// -----------------------
	parts_tools1_btn.onclick = function () {
		parts_tools1_popup_window.style.display = "block";
	}

	parts_tools1_close_wdw.onclick = function () {
		parts_tools1_popup_window.style.display = "none";
	}

	// parts_tools2 popup window
	// -----------------------
	parts_tools2_btn.onclick = function () {
		parts_tools2_popup_window.style.display = "block";
	}

	parts_tools2_close_wdw.onclick = function () {
		parts_tools2_popup_window.style.display = "none";
	}

	// parts_tools3 popup window
	// -----------------------
	parts_tools3_btn.onclick = function () {
		parts_tools3_popup_window.style.display = "block";
	}

	parts_tools3_close_wdw.onclick = function () {
		parts_tools3_popup_window.style.display = "none";
	}

	// parts_tools4 popup window
	// -----------------------
	parts_tools4_btn.onclick = function () {
		parts_tools4_popup_window.style.display = "block";
	}

	parts_tools4_close_wdw.onclick = function () {
		parts_tools4_popup_window.style.display = "none";
	}

	// parts_tools5 popup window
	// -----------------------
	parts_tools5_btn.onclick = function () {
		parts_tools5_popup_window.style.display = "block";
	}

	parts_tools5_close_wdw.onclick = function () {
		parts_tools5_popup_window.style.display = "none";
	}

	// parts_tools6 popup window
	// -----------------------
	parts_tools6_btn.onclick = function () {
		parts_tools6_popup_window.style.display = "block";
	}

	parts_tools6_close_wdw.onclick = function () {
		parts_tools6_popup_window.style.display = "none";
	}

	// parts_tools7 popup window
	// -----------------------
	parts_tools7_btn.onclick = function () {
		parts_tools7_popup_window.style.display = "block";
	}

	parts_tools7_close_wdw.onclick = function () {
		parts_tools7_popup_window.style.display = "none";
	}

	// parts_tools8 popup window
	// -----------------------
	parts_tools8_btn.onclick = function () {
		parts_tools8_popup_window.style.display = "block";
	}

	parts_tools8_close_wdw.onclick = function () {
		parts_tools8_popup_window.style.display = "none";
	}

	// parts_tools9 popup window
	// -----------------------
	parts_tools9_btn.onclick = function () {
		parts_tools9_popup_window.style.display = "block";
	}

	parts_tools9_close_wdw.onclick = function () {
		parts_tools9_popup_window.style.display = "none";
	}

	// parts_tools10 popup window
	// -----------------------
	parts_tools10_btn.onclick = function () {
		parts_tools10_popup_window.style.display = "block";
	}

	parts_tools10_close_wdw.onclick = function () {
		parts_tools10_popup_window.style.display = "none";
	}

	// parts_tools11 popup window
	// -----------------------
	parts_tools11_btn.onclick = function () {
		parts_tools11_popup_window.style.display = "block";
	}

	parts_tools11_close_wdw.onclick = function () {
		parts_tools11_popup_window.style.display = "none";
	}

	// parts_tools12 popup window
	// -----------------------
	parts_tools12_btn.onclick = function () {
		parts_tools12_popup_window.style.display = "block";
	}

	parts_tools12_close_wdw.onclick = function () {
		parts_tools12_popup_window.style.display = "none";
	}


	// When click anywhere outside the container,close window
	window.onclick = function (event) {
		if (event.target == parts_tools1_popup_window) {
			parts_tools1_popup_window.style.display = "none";
		}
		if (event.target == parts_tools2_popup_window) {
			parts_tools2_popup_window.style.display = "none";
		}
		if (event.target == parts_tools3_popup_window) {
			parts_tools3_popup_window.style.display = "none";
		}
		if (event.target == parts_tools4_popup_window) {
			parts_tools4_popup_window.style.display = "none";
		}
		if (event.target == parts_tools5_popup_window) {
			parts_tools5_popup_window.style.display = "none";
		}
		if (event.target == parts_tools6_popup_window) {
			parts_tools6_popup_window.style.display = "none";
		}
		if (event.target == parts_tools7_popup_window) {
			parts_tools7_popup_window.style.display = "none";
		}
		if (event.target == parts_tools8_popup_window) {
			parts_tools8_popup_window.style.display = "none";
		}
		if (event.target == parts_tools9_popup_window) {
			parts_tools9_popup_window.style.display = "none";
		}
		if (event.target == parts_tools10_popup_window) {
			parts_tools10_popup_window.style.display = "none";
		}
		if (event.target == parts_tools11_popup_window) {
			parts_tools11_popup_window.style.display = "none";
		}
		if (event.target == parts_tools12_popup_window) {
			parts_tools12_popup_window.style.display = "none";
		}
		// Navbar close window
		if (event.target == this.navbar_popup) {
			nav.classList.remove('navbar--visible');
		}


		// Close filter window when clicked outside window
		if (event.target == this.filters_window) {
			this.filters_window.classList.remove('collection__filters--visible');
			filters_close_icon.classList.remove('close-window--visible');
		}

		// Close sort window when clicked outside window
		if (event.target == this.sort_window) {
			this.sort_window.classList.remove('collection__sort--visible');
			sort_close_icon.classList.remove('close-window--visible');
		}
	}
}





// ACCESSORIES
if (accessories_page) {


	function media_queries_tablet_landscape(for_tablet_landscape_down) {
		if (for_tablet_landscape_down.matches) {


			// Remove dropdown hover effect in small devices
			navbar__dropdown_hover1.classList.remove("hover");
			navbar__dropdown_hover2.classList.remove("hover");
			navbar__dropdown_hover3.classList.remove("hover");


			// ========= FILTERS => COLLECTION
			// Toggle/Show filter window when clicked in filters link
			filters_link.addEventListener('click', () => {
				filters_window.classList.toggle('collection__filters--visible');
				filters_close_icon.classList.toggle('close-window--visible');
			})

			// Close filter window when clicked on X
			filters_close_icon.addEventListener('click', () => {
				filters_window.classList.remove('collection__filters--visible');
				filters_close_icon.classList.remove('close-window--visible');
			})


			// ========= SORT => COLLECTION
			// Toggle/Show sort window when clicked in "sort by" link
			sort_link.addEventListener('click', () => {
				sort_window.classList.toggle('collection__sort--visible');
				sort_close_icon.classList.toggle('close-window--visible');
			})

			// Close sort window when clicked on X
			sort_close_icon.addEventListener('click', () => {
				sort_window.classList.remove('collection__sort--visible');
				sort_close_icon.classList.remove('close-window--visible');
			})
		}

		else {

			// Add class for hover effect in large screens
			navbar__dropdown_hover1.classList.add("hover");
			navbar__dropdown_hover2.classList.add("hover");
			navbar__dropdown_hover3.classList.add("hover");


			// ========= FILTERS => COLLECTION
			// Toggle/Show filter window when clicked in filters link
			filters_link.addEventListener('click', () => {
				filters_window.classList.toggle('collection__filters--visible');
				filters_close_icon.classList.toggle('close-window--visible');
			})

			// Close filter window when clicked on X
			filters_close_icon.addEventListener('click', () => {
				filters_window.classList.remove('collection__filters--visible');
				filters_close_icon.classList.remove('close-window--visible');
			})


			// ========= SORT => COLLECTION
			// Toggle/Show sort window when clicked in "sort by" link
			sort_link.addEventListener('click', () => {
				sort_window.classList.toggle('collection__sort--visible');
				sort_close_icon.classList.toggle('close-window--visible');
			})

			// Close sort window when clicked on X
			sort_close_icon.addEventListener('click', () => {
				sort_window.classList.remove('collection__sort--visible');
				sort_close_icon.classList.remove('close-window--visible');
			})
		}
	}



	// accessories1 popup window
	// -----------------------
	accessories1_btn.onclick = function () {
		accessories1_popup_window.style.display = "block";
	}

	accessories1_close_wdw.onclick = function () {
		accessories1_popup_window.style.display = "none";
	}

	// accessories2 popup window
	// -----------------------
	accessories2_btn.onclick = function () {
		accessories2_popup_window.style.display = "block";
	}

	accessories2_close_wdw.onclick = function () {
		accessories2_popup_window.style.display = "none";
	}

	// accessories3 popup window
	// -----------------------
	accessories3_btn.onclick = function () {
		accessories3_popup_window.style.display = "block";
	}

	accessories3_close_wdw.onclick = function () {
		accessories3_popup_window.style.display = "none";
	}

	// accessories4 popup window
	// -----------------------
	accessories4_btn.onclick = function () {
		accessories4_popup_window.style.display = "block";
	}

	accessories4_close_wdw.onclick = function () {
		accessories4_popup_window.style.display = "none";
	}

	// accessories5 popup window
	// -----------------------
	accessories5_btn.onclick = function () {
		accessories5_popup_window.style.display = "block";
	}

	accessories5_close_wdw.onclick = function () {
		accessories5_popup_window.style.display = "none";
	}

	// accessories6 popup window
	// -----------------------
	accessories6_btn.onclick = function () {
		accessories6_popup_window.style.display = "block";
	}

	accessories6_close_wdw.onclick = function () {
		accessories6_popup_window.style.display = "none";
	}


	// When click anywhere outside the container,close window
	window.onclick = function (event) {
		if (event.target == accessories1_popup_window) {
			accessories1_popup_window.style.display = "none";
		}
		if (event.target == accessories2_popup_window) {
			accessories2_popup_window.style.display = "none";
		}
		if (event.target == accessories3_popup_window) {
			accessories3_popup_window.style.display = "none";
		}
		if (event.target == accessories4_popup_window) {
			accessories4_popup_window.style.display = "none";
		}
		if (event.target == accessories5_popup_window) {
			accessories5_popup_window.style.display = "none";
		}
		if (event.target == accessories6_popup_window) {
			accessories6_popup_window.style.display = "none";
		}
		// Navbar close window
		if (event.target == this.navbar_popup) {
			nav.classList.remove('navbar--visible');
		}


		// Close filter window when clicked outside window
		if (event.target == this.filters_window) {
			this.filters_window.classList.remove('collection__filters--visible');
			filters_close_icon.classList.remove('close-window--visible');
		}

		// Close sort window when clicked outside window
		if (event.target == this.sort_window) {
			this.sort_window.classList.remove('collection__sort--visible');
			sort_close_icon.classList.remove('close-window--visible');
		}
	}
}




// SALE
if (sale_page) {


	function media_queries_tablet_landscape(for_tablet_landscape_down) {
		if (for_tablet_landscape_down.matches) {


			// Remove dropdown hover effect in small devices
			navbar__dropdown_hover1.classList.remove("hover");
			navbar__dropdown_hover2.classList.remove("hover");
			navbar__dropdown_hover3.classList.remove("hover");


			// ========= FILTERS => COLLECTION
			// Toggle/Show filter window when clicked in filters link
			filters_link.addEventListener('click', () => {
				filters_window.classList.toggle('collection__filters--visible');
				filters_close_icon.classList.toggle('close-window--visible');
			})

			// Close filter window when clicked on X
			filters_close_icon.addEventListener('click', () => {
				filters_window.classList.remove('collection__filters--visible');
				filters_close_icon.classList.remove('close-window--visible');
			})


			// ========= SORT => COLLECTION
			// Toggle/Show sort window when clicked in "sort by" link
			sort_link.addEventListener('click', () => {
				sort_window.classList.toggle('collection__sort--visible');
				sort_close_icon.classList.toggle('close-window--visible');
			})

			// Close sort window when clicked on X
			sort_close_icon.addEventListener('click', () => {
				sort_window.classList.remove('collection__sort--visible');
				sort_close_icon.classList.remove('close-window--visible');
			})
		}

		else {

			// Add class for hover effect in large screens
			navbar__dropdown_hover1.classList.add("hover");
			navbar__dropdown_hover2.classList.add("hover");
			navbar__dropdown_hover3.classList.add("hover");


			// ========= FILTERS => COLLECTION
			// Toggle/Show filter window when clicked in filters link
			filters_link.addEventListener('click', () => {
				filters_window.classList.toggle('collection__filters--visible');
				filters_close_icon.classList.toggle('close-window--visible');
			})

			// Close filter window when clicked on X
			filters_close_icon.addEventListener('click', () => {
				filters_window.classList.remove('collection__filters--visible');
				filters_close_icon.classList.remove('close-window--visible');
			})


			// ========= SORT => COLLECTION
			// Toggle/Show sort window when clicked in "sort by" link
			sort_link.addEventListener('click', () => {
				sort_window.classList.toggle('collection__sort--visible');
				sort_close_icon.classList.toggle('close-window--visible');
			})

			// Close sort window when clicked on X
			sort_close_icon.addEventListener('click', () => {
				sort_window.classList.remove('collection__sort--visible');
				sort_close_icon.classList.remove('close-window--visible');
			})
		}
	}



	// sale1 popup window
	// -----------------------
	sale1_btn.onclick = function () {
		sale1_popup_window.style.display = "block";
	}

	sale1_close_wdw.onclick = function () {
		sale1_popup_window.style.display = "none";
	}

	// sale2 popup window
	// -----------------------
	sale2_btn.onclick = function () {
		sale2_popup_window.style.display = "block";
	}

	sale2_close_wdw.onclick = function () {
		sale2_popup_window.style.display = "none";
	}

	// sale3 popup window
	// -----------------------
	sale3_btn.onclick = function () {
		sale3_popup_window.style.display = "block";
	}

	sale3_close_wdw.onclick = function () {
		sale3_popup_window.style.display = "none";
	}

	// sale4 popup window
	// -----------------------
	sale4_btn.onclick = function () {
		sale4_popup_window.style.display = "block";
	}

	sale4_close_wdw.onclick = function () {
		sale4_popup_window.style.display = "none";
	}

	// sale5 popup window
	// -----------------------
	sale5_btn.onclick = function () {
		sale5_popup_window.style.display = "block";
	}

	sale5_close_wdw.onclick = function () {
		sale5_popup_window.style.display = "none";
	}

	// sale6 popup window
	// -----------------------
	sale6_btn.onclick = function () {
		sale6_popup_window.style.display = "block";
	}

	sale6_close_wdw.onclick = function () {
		sale6_popup_window.style.display = "none";
	}


	// When click anywhere outside the container,close window
	window.onclick = function (event) {
		if (event.target == sale1_popup_window) {
			sale1_popup_window.style.display = "none";
		}
		if (event.target == sale2_popup_window) {
			sale2_popup_window.style.display = "none";
		}
		if (event.target == sale3_popup_window) {
			sale3_popup_window.style.display = "none";
		}
		if (event.target == sale4_popup_window) {
			sale4_popup_window.style.display = "none";
		}
		if (event.target == sale5_popup_window) {
			sale5_popup_window.style.display = "none";
		}
		if (event.target == sale6_popup_window) {
			sale6_popup_window.style.display = "none";
		}
		// Navbar close window
		if (event.target == this.navbar_popup) {
			nav.classList.remove('navbar--visible');
		}


		// Close filter window when clicked outside window
		if (event.target == this.filters_window) {
			this.filters_window.classList.remove('collection__filters--visible');
			filters_close_icon.classList.remove('close-window--visible');
		}

		// Close sort window when clicked outside window
		if (event.target == this.sort_window) {
			this.sort_window.classList.remove('collection__sort--visible');
			sort_close_icon.classList.remove('close-window--visible');
		}
	}
}



//============================================
//  MEDIA QUERIES VARIABLE AND CALL IT FUNCTION
// =============================================
// Tablet devices
var for_tablet_landscape_down = window.matchMedia("(max-width: 1000px)");

media_queries_tablet_landscape(for_tablet_landscape_down);
for_tablet_landscape_down.addListener(media_queries_tablet_landscape);

// Smartphones > 750px
var for_tablet_portrait_down = window.matchMedia("(max-width: 750px)");

media_queries_tablet_portrait(for_tablet_portrait_down);
for_tablet_portrait_down.addListener(media_queries_tablet_portrait);



// Sliders 
var slider_container = document.querySelector('.thumbnail-container--inner');

// Left slider
var slider_left = document.querySelector('.slide--left');

// Right Slider
var slider_right = document.querySelector('.slide--right');

var scroll_right = 0;

// Scroll to the left
slider_left.onclick = function () {
	slider_container.scrollLeft -= 120;
};

// Scroll to the right
slider_right.onclick = function () {
	slider_container.scrollLeft += 120;
}


// Make the right icon to disappear when scroll reaches the right side => have to modify the condition > adding 1 to clientwidth to make it work
slider_container.addEventListener('scroll', function () {
	if (slider_container.scrollWidth - slider_container.scrollLeft <= slider_container.clientWidth + 1) {
		slider_right.style.opacity = 0;
	}
	else {
		slider_right.style.opacity = 1;
	}
});

slider_container.addEventListener('scroll', function () {
	if (slider_container.scrollWidth - slider_container.scrollLeft === slider_container.scrollWidth) {
		slider_left.style.opacity = 0;
	}
	else {
		slider_left.style.opacity = 1;
	}
});


