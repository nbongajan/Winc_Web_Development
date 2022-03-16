// OPEN + CLOSE NAV

let toggleNavStatus = false;

let toggleNav = function () {
  let getSidebar = document.querySelector(".nav-sidebar");
  let getSidebarUl = document.querySelector(".nav-sidebar ul");
  let getSidebarLinks = document.querySelectorAll(".nav-sidebar a");

  if (toggleNavStatus === false) {
    getSidebarUl.style.visibility = "visible";
    getSidebar.style.width = "200px";

    let arrayLength = getSidebar.length;
    for (let i = 0; 1 < arrayLength; i++) {
      getSidebarLinks[i].style.opacity = "1";
    }
    toggleNavStatus = true;
  }

  else if (toggleNavStatus === true) {
    getSidebar.style.width = "50px";

    let arrayLength = getSidebar.length;
    for (let i = 0; 1 < arrayLength; i++) {
      getSidebarLinks[i].style.opacity = "0";
    }
    getSidebarUl.style.visibility = "hidden";
    toggleNavStatus = false;
  }
};

const menuButton = document.getElementsByClassName('menu-btn');
menuButton[0].addEventListener("click", toggleNav);

// CLOSE NAV AFTER COLOR PICK

let closeNav = function () {
  let getSidebar = document.querySelector(".nav-sidebar");
  let getSidebarUl = document.querySelector(".nav-sidebar ul");
  let getSidebarLinks = document.querySelectorAll(".nav-sidebar a");

  if (toggleNavStatus === true) {
    getSidebar.style.width = "50px";

    let arrayLength = getSidebar.length;
    for (let i = 0; 1 < arrayLength; i++) {
      getSidebarLinks[i].style.opacity = "0";
    }
    getSidebarUl.style.visibility = "hidden";
    toggleNavStatus = false;
  }
};

// CHANGE COLORS

const color1 = document.getElementById("color1");
const changeColor1 = function () {
  document.body.style.background = "lightgreen";
  closeNav();
};
color1.addEventListener("click", changeColor1);

const color2 = document.getElementById("color2");
const changeColor2 = function () {
  document.body.style.background = "rgb(112, 64, 0)";
  closeNav();
};
color2.addEventListener("click", changeColor2);

const color3 = document.getElementById("color3");
const changeColor3 = function () {
  document.body.style.background = "yellow";
  closeNav();
};
color3.addEventListener("click", changeColor3);

const color4 = document.getElementById("color4");
const changeColor4 = function () {
  document.body.style.background = "darkred";
  closeNav();
};
color4.addEventListener("click", changeColor4);

const color5 = document.getElementById("color5");
const changeColor5 = function () {
  document.body.style.background = "palevioletred";
  closeNav();
};
color5.addEventListener("click", changeColor5);