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
let scrollPercentRoundedValue = 0;


function getPercentage() {
    let scrollTop = window.scrollY;
    let docHeight = document.body.offsetHeight;
    let winHeight = window.innerHeight;
    let scrollPercent = scrollTop / (docHeight - winHeight);
    let scrollPercentRounded = Math.round(scrollPercent * 100);
    scrollPercentRoundedValue = scrollPercentRounded;
    percentage.textContent = scrollPercentRounded + '%';
    if(scrollPercentRounded != 0){
        arrowTop.style.display = 'block';
    }else{
        arrowTop.style.display = 'none';
    };

    if(scrollPercentRounded > 99){
        percentage.style.bottom = '87px';
        arrowTop.style.bottom = '87px';
    }else{
        percentage.style.bottom = '5px';
        arrowTop.style.bottom = '5px';
    };
    if(scrollPercentRounded >= 25){
        over25 = true;
    }over25 = false;

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

//function for red and green border
function redBorder(element){
    element.style.borderColor = 'red';
}

function greenBorder(element){
    element.style.borderColor = 'green';
}

//function validation form
function formValidation() {
    var allValid = true;
    //IF statement for name
    if(typeof inputName.value == 'string' && (isLetter(inputName.value) && (inputName.value.length >= 2 && inputName.value.length < 100))){
        greenBorder(inputName);

    }else{
        redBorder(inputName);
        allValid = false;
    };
    //IF statement for mail
    if(validateEmail(inputMail.value)){
        greenBorder(inputMail);

    }else{
        redBorder(inputMail);
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

//Newsletter area
 //FUNCION PARA DISPLAY
 var news = document.getElementById("newsletter")
 var closeNewsButton = document.getElementById('close-newsletter');
 var newsHidden = true;

function newsDisplayTrue() {
    news.classList.add('newsletter--visible');
}

//function: makes popup appear by time
function newsTimeAppear(){
    if (newsHidden){
        setTimeout(newsDisplayTrue, 5000);
        newsHidden = false;
    }    
}
 //Function: makes popup appear when scrolling
function newsScrollAppear(){
    if (scrollPercentRoundedValue >= 25){
        newsDisplayTrue;
        newsHidden = false;
    }
}

 function closeNewsletter(){
     if (!newsHidden){
         news.style.display = 'none';
         news.classList.remove('newsletter--visible');
         newsHidden = true;
     }
 }
 
 document.addEventListener('scroll',newsScrollAppear);
 newsTimeAppear();
 closeNewsButton.addEventListener('click',closeNewsletter)

 

//Function newsletter
var newsMail = document.getElementById('newsletter-input');
var newsButton = document.getElementById('news-button');
var newsForm = document.getElementById('newsletter-form');

function getNewsData() {
    return {
        'mail': newsMail.value
    }    
}

function sendNews() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(getNewsData()),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
}

function validateNews (){
    if(validateEmail(newsMail.value)){
        return true;
    }
    redBorder(newsMail);
    return false;
}

function submitNewsletter(event) {
    event.preventDefault();
    const newsValid = validateNews();
    if (newsValid){
        sendNews();
        closeNewsletter();
    }
}
newsForm.addEventListener('submit',submitNewsletter);

//Currency API
var select = document.querySelector('select');
var professionalPrice = document.getElementById('professional-price');
var professionalPriceValue = Number(document.getElementById('professional-price').textContent);
var premiumPrice = document.getElementById('premium-price');
var premiumPriceValue = Number(document.getElementById('premium-price').textContent);
var API_URL = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur.json';


async function currency(){
    const res = await fetch(API_URL);
    const data = await res.json();
    //console.log(data['eur']);
    const arrKeys = Object.keys(data['eur']);
    const euros = data['eur'];
    console.log(euros);
    for(let i=0; i<arrKeys.length; i++){
        var option = document.createElement('option');
        option.value = arrKeys[i];
        option.text = arrKeys[i];
        select.appendChild(option);
    }

    select.addEventListener('change', ()=>{
        professionalPrice.textContent = (professionalPriceValue * euros[select.value]).toFixed(2); 
        premiumPrice.textContent = (premiumPriceValue * euros[select.value]).toFixed(2); 

    });  
};
currency();