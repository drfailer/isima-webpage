// hide and show navbar when menu icon is clicked

var menuButton = document.getElementById('phone-menu-button');
var navbar = document.getElementById('navbarmenu');

document.addEventListener('click', (event) => {
    var inMenuButton = menuButton.contains(event.target);
    var inNavbar = navbar.contains(event.target);

    if (!inMenuButton && !inNavbar) {
	menuButton.hidden = false;
	navbar.hidden = true;
    } else {
	menuButton.hidden = true;
	navbar.hidden = false;
    }

}, false);
