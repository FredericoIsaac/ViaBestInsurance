/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function scrollIt(scrollSection){
    window.scrollTo({
        "behavior": "smooth",
        "left" : 0,
        "top" : scrollSection.offsetTop
    });
};

function isSectionViewport(view){
    const cordenadas = view.getBoundingClientRect();
    return (cordenadas.top >=0 && cordenadas.left >=0 && cordenadas.right <= (window.innerWidth || document.documentElement.clientWidth) && cordenadas.bottom <= (window.innerHeight || document.documentElement.clientHeight))
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const fragment = document.createDocumentFragment();


const sections = document.getElementsByTagName("section");
const arraySections = Array.from(sections);


for(let i=0; i < arraySections.length; i++){
            //Li atributes
    const navSections = document.createElement("li");   
    const nameSection = arraySections[i].querySelector("h2")
    const linkSection = document.createElement("a");
    navSections.appendChild(linkSection);

    linkSection.textContent = nameSection.textContent;
    navSections.style.marginLeft = "20px";
    linkSection.setAttribute("href","#" + nameSection.parentNode.parentNode.id);
    linkSection.style.cssText= "text-decoration:none; line-height: 1.6em; font-family: 'Merriweather', serif; color: #000;";

    
    fragment.appendChild(navSections);
};

const ulNav = document.querySelector("ul");

ulNav.appendChild(fragment);

ulNav.style.cssText  = "color: black; font-family: 'Oxygen', Sans-Serif; font-size: 1em; padding: 20px";


// Add class 'active' to section when near top of viewport

document.addEventListener("scroll", function(){
    arraySections.forEach(function(highlightSection) {
        if(isSectionViewport(highlightSection)){
        highlightSection.classList.toggle("your-active-class");
    }
});
});



// Scroll to anchor ID using scrollTO event

const paiLinks = document.querySelector("ul");

paiLinks.addEventListener("click", function(event){
    if(event.target && event.target.nodeName == "A"){
       event.preventDefault();
       const hrefName = event.target.getAttribute("href");
       const scrollSelection = document.querySelector(hrefName);
        scrollIt(scrollSelection);          
        };    
});




/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


