var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        backtotop.style.display = "block";
      } 
    else if (currentScrollPos < 400 || currentScrollPos < 500) {
        backtotop.style.display = "none";}
        else {
            backtotop.style.display = "none";
      }
  }
  prevScrollpos = currentScrollPos;
}

var audio = document.getElementById('background_audio');

function enableMute() { 
    audio.muted = true;
} 
  
function disableMute() { 
    audio.muted = false;
} 
  
function checkMute() { 
    alert(audio.muted);
}     

let buttontoggle = false;

const button = document.getElementById("button");
button.onclick = () => {
    buttontoggle = !buttontoggle
    ButtonWork();
}

const ButtonWork = () => {
    if (buttontoggle == true){
        button.src = 'speakeroff.png'
        enableMute();
    }
    else {
        button.src = 'speakeron.png'
        disableMute();
    }
}

// Get the button:
let backtotop = document.getElementById("bttb");

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function ScrollLeft() {
  const gallery = document.getElementById('gallery');
  gallery.scrollBy({ left: -450, behavior: 'smooth' });
}

function scrollRight() {
  const gallery = document.getElementById('gallery');
  gallery.scrollBy({ left: 450, behavior: 'smooth' });
}

document.querySelectorAll('.gallery-item').forEach(item => {
  const img = item.querySelector('img');

  item.addEventListener('mousemove', (e) => {
    const rect = item.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    const rotateX = -y * 15; // Invert Y
    const rotateY = x * 15;

    img.style.transform = `scale(1.1) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    img.style.boxShadow = `${-rotateY}px ${rotateX}px 20px rgba(0, 0, 0, 0.3)`;
  });

  item.addEventListener('mouseleave', () => {
    img.style.transform = 'scale(1) rotateX(0) rotateY(0)';
    img.style.boxShadow = 'none';
  });
});

function scrollGallery(id, amount) {
    const gallery = document.getElementById(id);
    gallery.scrollBy({ left: amount, behavior: 'smooth' });
}

function updateGridScale() {
  const zoomLevel = window.devicePixelRatio;
  const scaleFactor = 1 / zoomLevel;

  const gridWrapper = document.querySelector('.news-scale-wrapper');
  if (gridWrapper) {
    gridWrapper.style.transform = `scale(${scaleFactor})`;
  }
}

// Run on load
window.addEventListener('load', updateGridScale);

// Re-run on resize or zoom change
window.addEventListener('resize', updateGridScale);

window.addEventListener("load", function () {
    const loadingScreen = document.getElementById("loading-screen");
    loadingScreen.style.opacity = 0;
    setTimeout(() => loadingScreen.style.display = "none", 1000);
});