let toggleNavStatus = false;

let toggleNav = function() {
    let getSidebar = document.querySelector(".nav-sidebar");
    let getSidebarUl = document.querySelector(".nav-sidebar ul");
    let getSidebarTitle = document.querySelector(".nav-sidebar span");
    let getSidebarLinks = document.querySelectorAll(".nav-sidebar a");

    if(toggleNavStatus === false) {
        getSidebarUl.style.visibility = "visible";
        getSidebar.style.width = "272px";
        getSidebarTitle.opacity = "0.5";

        let arrLength = getSidebarLinks.length;
        for(let i = 0; i < arrLength; i++) {
            getSidebarLinks[i].style.opacity = "1";
        }
        toggleNavStatus = true;
    
    }else if(toggleNavStatus === true) {
        getSidebar.style.width = "50px";
        getSidebarTitle.opacity = "0";
    
        let arrLength = getSidebarLinks.length;
        for(let i = 0; i < arrLength; i++) {
            getSidebarLinks[i].style.opacity = "0";
        }
        getSidebarUl.style.visibility = "hidden";
        toggleNavStatus = false;
    }
}