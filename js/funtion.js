function continueGame(){
    const mainAlphabet = findARandomNumber();
    
    const displayText = document.getElementById('displayText');
    displayText.innerText = mainAlphabet;

    setBackgroundColor(mainAlphabet);
}

function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}