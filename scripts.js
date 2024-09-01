// Store the loader globally
var loader;

// Global menu variables
var menuIcon;
var navbar;
var sections;
var navLinks;

// Recursive function to display and fade out the loader
function loadNow(opacity){
  if(opacity <= 0){
    loader.style.display = 'none';
    document.getElementById('content').style.display = 'block';
    displayContent(0)
  } else {
    console.log("hello");
    loader.style.opacity = opacity;
    loader.style.transform = 'scale(2, 2)';
    window.setTimeout(function (){
      loadNow(opacity - 0.05)
    }, 50);
  }
}

// Recursive function to display and fade in the main content
function displayContent(opa){
  content = document.getElementById('content')
  if(opa >= 1){
    return
  } else{
    console.log("hello");
    window.onscroll = () => {
        menuIcon = document.querySelector("#menu-icon");
        navbar = document.querySelector('.nav-bar');
        sections = document.querySelectorAll('section');
        navLinks = document.querySelectorAll('header nav a');
        console.log("hello");
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');
            console.log("testing");
            if(top >= offset && top < offset + height){
                navLinks.forEach(links => {
                    links.classList.remove('active');
                    document.querySelector('header nav a [href*=' + id + ' ]').classList.add('active');
                })
            }
        })
    }
    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    }
    
    content.style.opacity = opa
    window.setTimeout(function(){
      displayContent(opa + 0.05);
    }, 50);
  }
}

// Call to the display loader or display content function based
// on session cookie
document.addEventListener("DOMContentLoaded", function() {
 // if(!sessionStorage.getItem('preLoaded')){
    sessionStorage.setItem('preLoaded', true);
    window.setTimeout(function() {
    loader = document.getElementById('loader');
    loadNow(1, 1);
    }, 3000);
  /*} else{
    loader = document.getElementById('loader');
    loader.style.display = "none";
    document.getElementById('content').style.display = 'block';
    displayContent(0);
  }*/
});



