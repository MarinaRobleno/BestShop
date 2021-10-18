const openButton = document.getElementById("open");
const closeButton = document.getElementById("close");
let dropdownContent = document.getElementById("header-links");
let isHidden = true;

//Hamburger menu function
function openDropdown(){
    if(isHidden === true){
        dropdownContent.classList.add('header-links--visible');
        openButton.style.display = 'none';
        closeButton.style.display = 'block';
        isHidden = false;
    }else{
        dropdownContent.classList.remove('header-links--visible');
        openButton.style.display = 'block';
        closeButton.style.display = 'none';
        isHidden = true;
    }
}
openButton.addEventListener('click', openDropdown);
closeButton.addEventListener('click',openDropdown);

//Percentage scroll function
let percentage = document.getElementById("percentage");
let originalTitle = document.title;
let arrowTop = document.getElementById("return-to-top");

function getPercentage() {
    let scrollTop = window.scrollY;
    let docHeight = document.body.offsetHeight;
    let winHeight = window.innerHeight;
    let scrollPercent = scrollTop / (docHeight - winHeight);
    let scrollPercentRounded = Math.round(scrollPercent * 100);
    percentage.textContent = scrollPercentRounded + '%';
    if(scrollPercentRounded != 0){
        arrowTop.style.display = 'block';
    }else{
        arrowTop.style.display = 'none';
    }

    if(scrollPercentRounded > 99){
        percentage.style.bottom = '87px';
        arrowTop.style.bottom = '87px';
    }else{
        percentage.style.bottom = '5px';
        arrowTop.style.bottom = '5px';
    }
}

window.addEventListener('scroll',getPercentage);

//Return to top function
var delay = 200;

function returnToTop() {
    setTimeout(function () {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, delay);
}

arrowTop.addEventListener("click",returnToTop);

//Form function