// Store the loader globally
var loader;

// Global menu variables
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.nav-bar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
let body = document.getElementById('body');
let show_menu = false;


// Recursive function to display and fade out the loader
function loadNow(opacity) {
  if (opacity <= 0) {
    loader.style.display = 'none';
    document.getElementById('content').ariaHidden = false;
    displayContent(0)
  } else {
    loader.style.opacity = opacity;
    loader.style.transform = 'scale(2, 2)';
    window.setTimeout(function () {
      loadNow(opacity - 0.05)
    }, 50);
  }
}


var targetNode = document.getElementById('content');
var observer = new MutationObserver(function () {
  if (targetNode.ariaHidden != true) {
    window.onscroll = () => {
      sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
          navLinks.forEach(links => {
            if (links.classList != null) {
              links.classList.remove('active');
            }
            document.getElementById(id + '-link').classList.add('active');
          })
        }
      })
    }

    menuIcon.onclick = () => {
      menuIcon.classList.toggle('bx-x');
      if (show_menu) {
        navbar.style.display = 'none';
        show_menu = false;
      } else {
        navbar.style.display = 'block';
        show_menu = true;
      }
    }
  }
});

observer.observe(targetNode, { attributes: true, childList: true });

// Recursive function to display and fade in the main content
function displayContent(opa) {
  content = document.getElementById('content')
  if (opa >= 1) {
    return
  } else {
    content.style.opacity = opa
    window.setTimeout(function () {
      displayContent(opa + 0.05);
    }, 50);
  }
}


// Call to the display loader or display content function based
// on session cookie
document.addEventListener("DOMContentLoaded", function () {
  // if(!sessionStorage.getItem('preLoaded')){
  sessionStorage.setItem('preLoaded', true);
  window.setTimeout(function () {
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


window.setTimeout(function () {
  body.classList.remove("noscroll");
}, 5000);

