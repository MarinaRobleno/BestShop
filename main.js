const openButton = document.getElementById("open");
const closeButton = document.getElementById("close");
let dropdownContent = document.getElementById("header-links");
let isHidden = true;



let percentage = document.getElementById("percentage");
percentage.innerHTML = '';


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

//Black hover function
function blackHover(){
    
}

//Percentage scroll function
function updatePercentage() {

}

openButton.addEventListener('click', openDropdown);
closeButton.addEventListener('click',openDropdown);



