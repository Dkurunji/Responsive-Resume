'use strict';

// nav menu toggling----------------------------
const navMenu = document.getElementById('menu-bar');
const overlay = document.getElementById("overlay-container");
const cross = document.getElementById("cross");
const overlayMenu = document.querySelectorAll('.overlay');
   

navMenu.addEventListener("click", function (e) {
     overlay.style.display = 'block';
    navMenu.style.display = 'none';
});

cross.addEventListener("click", function (e) {
    overlay.style.display = 'none';
    navMenu.style.display = 'block';
});

for (let i = 0; i < overlayMenu.length; i++){
    overlayMenu[i].addEventListener('click', function (e) {
          overlay.style.display = 'none';
    navMenu.style.display = 'block';
    });
}





// smooth scrolling using jquery-----------------------------------

var navMenus = document.querySelectorAll('.smooth-scroll a');

    for (let i = 0; i < navMenus.length; i++){
        navMenus[i].addEventListener('click', function (e) {
            e.preventDefault();
            let targetSectionId = this.textContent.trim().toLowerCase();
            let targetSection = document.getElementById(targetSectionId);
          
            
            let interval = setInterval(function () {
                let targetSectionCoords = targetSection.getBoundingClientRect();
                if (targetSectionCoords.top <= 130) {
                    clearInterval(interval);
                    return;
                }
                window.scrollBy(0, 50)
            }, 50);    
           
    });
}


// revealing sections---------------------------------------------------


function reveal() {
    
    const allSections = document.querySelectorAll('.reveal');
    for (let i = 0; i < allSections.length; i++) {
        let windowHeight = window.innerHeight;
        let revealTop = allSections[i].getBoundingClientRect().top;
        let revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
            allSections[i].classList.add('active');
        }
        else {
            allSections[i].classList.remove('active');
        }            
    }
       
};


window.addEventListener('scroll', reveal);


// skill bars auto fill--------------------------------------------------
const skillBars = document.querySelectorAll('.skill-progress > div');
const skillsContainer = document.getElementById('skills-container');
let animationDone = false;

function initialiseBars() {
    for (let bar of skillBars) {
        bar.style.width = 0 + '%';
    }
}
initialiseBars();

function fillBars() {   
   
    for (let bar of skillBars){
        let targetWidth = bar.getAttribute('data-skill-level');
        let currentWidth = 0;

        let interval = setInterval(function () {
            if (currentWidth > targetWidth) {
                clearInterval(interval);
                return;
            }
            currentWidth++;
            bar.style.width = currentWidth + '%';
        },40)
    }     
}


function checkScroll() {  
    const revealTop = skillsContainer.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;       
    
    if (!animationDone && revealTop < windowHeight) {
        animationDone = true;
        fillBars();
    }   
}

window.addEventListener('scroll', checkScroll);




