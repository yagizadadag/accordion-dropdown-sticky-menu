//Accordion
const accordion = document.getElementsByClassName("accordion-item");

for (i=0; i<accordion.length; i=i+1){
    accordion[i].addEventListener("click" , function(){
        this.classList.toggle("active")
    })
}

//Dropdown Menu
const dropdownButton = document.querySelector(".dropdown-btn");
const dropdownMenu = document.querySelector(".dropdown-menu");

dropdownButton.addEventListener("click" , () => {
    dropdownMenu.classList.toggle("open")
    const timeLine = gsap.timeline();
    if (dropdownMenu.classList.contains("open")){
        timeLine.to(dropdownMenu, 0.5, {clipPath : "circle(60rem at 10% 88%)"});
    } else {
        timeLine.to(dropdownMenu, 0.5, {clipPath : "circle(1rem at 10% 88%)"});
    }
});

const stickyContainer = document.getElementById("sticky-menu-container");
const stickyMenu = document.getElementById("sticky-menu");

//Sticky Menu
window.onscroll = function (){
    var vh = window.innerHeight;
    if(document.body.scrollTop >= 70*vh/100 || document.documentElement.scrollTop >= 70*vh/100){
        stickyContainer.style.display = "flex";
    } else{
        stickyContainer.style.display = "none";
    }
    
}

function toggleMenu() {
    stickyMenu.classList.toggle("sticky-menu-active");
}
