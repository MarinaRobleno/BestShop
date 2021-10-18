const openButton = document.getElementById("open");
const closeButton = document.getElementById("close");
let dropdownContent = document.getElementById("header-links");
let isHidden = true;

function openDropdown(){
    if(isHidden === true){
        dropdownContent.style.display = 'block';
        openButton.style.display = 'none';
        closeButton.style.display = 'block';
        isHidden = false;
    }else{
        dropdownContent.style.display = 'none';
        openButton.style.display = 'block';
        closeButton.style.display = 'none';
        isHidden = true;
    }
}

openButton.addEventListener('click', openDropdown);
closeButton.addEventListener('click',openDropdown);
