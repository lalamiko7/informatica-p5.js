var nav_name_count = 0;
var nav_links_count = 0;
var nav_menu_symbool_count = 0;

function nav_menu_animatie() {
    const nav_menu_symbool = document.getElementById("nav-menu-symbool");
    if (nav_menu_symbool_count == 0) {
        nav_menu_symbool.classList.toggle("nav-menu-symbool-animatie-open");
        nav_menu_symbool_count += 1;
    } else if (nav_menu_symbool_count == 1) {
        nav_menu_symbool.classList.toggle("nav-menu-symbool-animatie-open");
        nav_menu_symbool.classList.toggle("nav-menu-symbool-animatie-close");
        nav_menu_symbool_count += 1;
    } else if (nav_menu_symbool_count == 2) {
        nav_menu_symbool.classList.toggle("nav-menu-symbool-animatie-close");
        nav_menu_symbool.classList.toggle("nav-menu-symbool-animatie-open");
        nav_menu_symbool_count -= 1;
    }

    const nav_name = document.getElementById("nav-name");
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

    const nav_links = document.getElementById("nav-links");
    if (nav_links_count == 0) {
        //nav_links.style.top = "1.3vw";
        nav_links.style.fontSize = "2.2vw";
        nav_links.style.right = "15vw";
        nav_links_count += 1;
    } else if (nav_links_count == 1) {
        nav_links.style.fontSize = "0";
        //nav_links.style.top = "2.7vw";
        nav_links.style.right = "12vw";
        nav_links_count += 1;
    } else if (nav_links_count == 2) {
        //nav_links.style.top = "1.3vw";
        nav_links.style.fontSize = "2.2vw";
        nav_links.style.right = "15vw";
        nav_links_count -= 1;
    }
}

function nav_logo_img_change_in() {
    const nav_logo_img = document.getElementById("nav-logo-img");
    nav_logo_img.src = 'img/logo-hover.png';
}

function nav_logo_img_change_out() {
    const nav_logo_img = document.getElementById("nav-logo-img");
    nav_logo_img.src = 'img/logo.png';
}
