function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function setElementValueById(elementId){
    const element = document.getElementById(elementId);
    const currentElement = element.innerText;
    const value = parseInt(currentElement);
    return value;
}

function setValue(elementId,value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}


function findARandomNumber(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    
    const randomNumber = Math.random()*25;
    const indexNumber = Math.round(randomNumber);

    const alphabet = alphabets[indexNumber];
    return alphabet;
}

function getText(elementId){
    const getText = document.getElementById(elementId);
    const text = getText.innerText;
    return text;
}

function setBackgroundColor(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-600');
}
function removeBackgroundColor(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-600');
}