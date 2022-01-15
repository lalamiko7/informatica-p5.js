let nav_name_count = 0;
let nav_links_count = 0;
let nav_menu_symbool_count = 0;

function symbol() {
    const nav_menu_symbool = document.getElementById("nav-menu-symbool");
    if (nav_menu_symbool_count === 0) {
        nav_menu_symbool.classList.toggle("nav-menu-symbool-animatie-open");
        nav_menu_symbool_count += 1;
    } else if (nav_menu_symbool_count === 1) {
        nav_menu_symbool.classList.toggle("nav-menu-symbool-animatie-open");
        nav_menu_symbool.classList.toggle("nav-menu-symbool-animatie-close");
        nav_menu_symbool_count += 1;
    } else if (nav_menu_symbool_count === 2) {
        nav_menu_symbool.classList.toggle("nav-menu-symbool-animatie-close");
        nav_menu_symbool.classList.toggle("nav-menu-symbool-animatie-open");
        nav_menu_symbool_count -= 1;
    }
}


function nav_menu_animatie() {
    symbol();

    if (window.innerWidth >= 1000) {
        const nav_name = document.getElementById("nav-name");
        if (nav_name_count === 0) {
            nav_name.classList.toggle("nav-name-animatie-out");
            nav_name_count += 1;
        } else if (nav_name_count === 1) {
            nav_name.classList.toggle("nav-name-animatie-out");
            nav_name.classList.toggle("nav-name-animatie-in");
            nav_name_count += 1;
        } else if (nav_name_count === 2) {
            nav_name.classList.toggle("nav-name-animatie-in");
            nav_name.classList.toggle("nav-name-animatie-out");
            nav_name_count -= 1;
        }

        const nav_links = document.getElementById("nav-links");
        if (nav_links_count === 0) {
            nav_links.style.right = "0";
            nav_links_count += 1;
        } else if (nav_links_count === 1) {
            nav_links.style.right = "-100%";
            nav_links_count += 1;
        } else if (nav_links_count === 2) {
            nav_links.style.right = "0";
            nav_links_count -= 1;
        }
    } else {
        const nav_links = document.getElementById("nav-links");
        const height = nav_links.clientHeight;
        if (nav_links_count === 0) {
            nav_links.style.top = "1vh";
            nav_links_count += 1;
        } else if (nav_links_count === 1) {
            nav_links.style.top = "-10vh";
            nav_links_count += 1;
        } else if (nav_links_count === 2) {
            nav_links.style.top = "1vh";
            nav_links_count -= 1;
        }
    }
}