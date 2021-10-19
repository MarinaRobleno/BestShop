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
var inputName = document.getElementById("inputName");
var inputMail = document.getElementById("inputMail");
var formButton = document.getElementById("form-button");
var checkBox = document.getElementById("check-box");
var myForm = document.getElementById("my-form")

//Function get objdata
function getPersonalData() {
    return {
        'name': inputName.value,
        'mail': inputMail.value
    }
    
}
//function to check name is all string
function isLetter(myString){
    return /[a-zA-Z]/.test(myString);
}

//function to check email is valid
function validateEmail(myMail){
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return reg.test(myMail);
}

//function validation form
function formValidation() {
    var allValid = true;
    //IF statement for name
    if(typeof inputName.value == 'string' && (isLetter(inputName.value) && (inputName.value.length >= 2 && inputName.value.length < 100))){
        inputName.style.borderColor = 'green';

    }else{
        inputName.style.borderColor = 'red';
        allValid = false;
    };
    //IF statement for mail
    if(validateEmail(inputMail.value)){
        inputMail.style.borderColor = 'green';

    }else{
        inputMail.style.borderColor = 'red';
        allValid = false;
    };
    //IF statement for checkbox
    if(!checkBox.checked){
        window.alert('Check the conditions');
        validCheck = false;
    };
    if(allValid === true){
        return true;
    }
    return false;
    
}

//function fetch() data
function send() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(getPersonalData()),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
}

//function Event form
function handleFormSubmit(event) {
    event.preventDefault();
    const isValid = formValidation();
    if (isValid){
        send();
    }
}

myForm.addEventListener('submit',handleFormSubmit);

