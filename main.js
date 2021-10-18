const openButton = document.getElementById("open");
const closeButton = document.getElementById("close");
const dropdownContent = document.querySelector("header-links");

function openDropdown(){
    if(dropdownContent.style.display == 'none'){
        dropdownContent.style.display = 'block';
        openButton.style.display = 'none';
        closeButton.style.display = 'block';
    }
}

function closeDropdown(){

}

openButton.addEventListener('click', openDropdown);
