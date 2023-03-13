function handleScroll() {
  var navbar = document.getElementById("navbar"); // Get navbar element inside the function to update it every time the function runs
  var currentScrollPos = window.pageYOffset;
  if (window.innerWidth >= 768) { // Check screen size inside the function instead of outside
    if (prevScrollpos > currentScrollPos) {
      navbar.style.top = "0";
    } else {
      navbar.style.top = "-15vh";
    }
    prevScrollpos = currentScrollPos;
  } else {
    navbar.style.top = "0"; // Set the navbar to be always visible for screens smaller than 400px
  }
}

var prevScrollpos = window.pageYOffset;
window.addEventListener('scroll', handleScroll); // Attach the function to the scroll event for all screen sizes


   

