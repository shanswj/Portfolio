
// Declares a function named "toggleMenu" that will be called when the hamburger icon is clicked
// Creates a reusable function to open/close the mobile menu
function toggleMenu(){
    // Selects the first element with class "menu-links" from the DOM
    // Gets a reference to the dropdown menu container so we can manipulate it
    const menu = document.querySelector(".menu-links");
    // Selects the first element with class "hamburger-icon" from the DOM
    // Gets a reference to the hamburger icon 
    const icon = document.querySelector(".hamburger-icon");
    //Toggles the "open" class on the menu element
    //Controls the menu visibility 
    menu.classList.toggle("open")
    //Toggles the "open" class on the hamburger icon
    //Animates the hamburger icon to transform into an X shape when menu is open
    icon.classList.toggle("open")
}