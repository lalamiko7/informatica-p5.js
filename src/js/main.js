var nav_name_count = 0;
var nav_links_count = 0;

function nav_menu_animatie(nav_menu_symbool) {
    nav_menu_symbool.classList.toggle("nav-menu-symbool-animatie");

    var nav_name = document.getElementById("nav-name");
    if (nav_name_count == 0) {
        nav_name.classList.toggle("nav-name-animatie-out");
        nav_name_count += 1;
    } else if (nav_name_count == 1) {
        nav_name.classList.toggle("nav-name-animatie-out");
        nav_name.classList.toggle("nav-name-animatie-in");
        nav_name_count += 1;
    } else if (nav_name_count == 2) {
        nav_name.classList.toggle("nav-name-animatie-in");
        nav_name.classList.toggle("nav-name-animatie-out");
        nav_name_count -= 1;
    }

    var nav_links = document.getElementById("nav-links");
    if (nav_links_count == 0) {
        nav_links.classList.toggle("nav-links-animatie-in");
        nav_links_count += 1;
    } else if (nav_links_count == 1) {
        nav_links.classList.toggle("nav-links-animatie-in");
        nav_links.classList.toggle("nav-links-animatie-out");
        nav_links_count += 1;
    } else if (nav_links_count == 2) {
        nav_links.classList.toggle("nav-links-animatie-out");
        nav_links.classList.toggle("nav-links-animatie-in");
        nav_links_count -= 1;
    }
}
