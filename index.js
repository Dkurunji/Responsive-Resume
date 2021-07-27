'use strict';

// nav menu toggling----------------------------
const navMenu = document.querySelector('.nav-menu');

navMenu .addEventListener("click",function(e) {       
       document.getElementById("check").checked = true;
});


// smooth scrolling using jquery-----------------------------------

var navMenus = document.querySelectorAll('.nav-menu a');
console.log(navMenus)

    for (let i = 0; i < navMenus.length; i++){
        navMenus[i].addEventListener('click', function (e) {
            e.preventDefault();
            let targetSectionId = this.textContent.trim().toLowerCase();
            let targetSection = document.getElementById(targetSectionId);
          
            
            let interval = setInterval(function () {
                let targetSectionCoords = targetSection.getBoundingClientRect();
                if (targetSectionCoords.top <= 150) {
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
        },30)
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




