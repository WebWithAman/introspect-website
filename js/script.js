/*************************************************************
  Get Toggle Button and Nav links
**************************************************************/
const toggleBtn = document.querySelector(".toggle-btn");
const navLinks = document.querySelector(".nav-links");


/*************************************************************
  Add Click Event On Toggle Button to Show Navbar
**************************************************************/
toggleBtn.onclick = function () {
    this.classList.toggle("rotate");
    navLinks.classList.toggle("show");
}

