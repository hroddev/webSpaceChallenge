const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

// when someone clicks the hamburger menu
navToggle.addEventListener("click", () => {

    const visiblity = nav.getAttribute("data-visible");

    // if the menu is closed, open it
    if(visiblity === "false") {
        nav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);

    // if the menu is open, close it
    } else {
        nav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
    }

    // console.log(navToggle.getAttribute("aria-expanded"));
})


