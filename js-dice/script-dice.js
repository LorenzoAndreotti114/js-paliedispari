// UNDO BTN DICE
let undoBtnInput = document.getElementById("undoBtn");

undoBtnInput.addEventListener("click", function(){

    location.reload();

});

// PARI BTN DICE
let pariBtnInput = document.getElementById("pariBtn");

pariBtnInput.addEventListener("click", function(){

    console.log("hai scelto pari");

    // TEXT INPUT
    let diceTextinput = document.getElementById("diceText");
    textInput = parseInt(diceTextinput.value);
    console.log(textInput);

    // NUM GENERATOR
    let randomNum = Math.floor(Math.random() * 6 + 1);
    console.log(randomNum);

    // 2 NUMBERS SUMMARY
    numberSum(textInput, randomNum);

    let numTot = numberSum(textInput, randomNum)
    console.log(numTot);
    // CHECK IF PARI O DISPARI

    numChecker(numTot)

    // WIN/LOOSE
    if (numChecker(numTot) === true) {
        document.getElementById("diceResult").innerHTML = "HAI VINTO!"
        console.log("hai vinto");
    }
    else {
        document.getElementById("diceResult").innerHTML = "HAI PERSO!"
        console.log("hai perso");
    }

    // NUMBER SHOWER

    document.getElementById("playerNum").innerHTML = textInput;

    document.getElementById("pcNum").innerHTML = randomNum;

    document.getElementById("totNum").innerHTML = numberSum(textInput, randomNum);

    

});

// DISPARI BTN DICE
let dispariBtnInput = document.getElementById("dispariBtn");

dispariBtnInput.addEventListener("click", function(){

    console.log("hai scelto dispari");

    // TEXT INPUT
    let diceTextinput = document.getElementById("diceText");
    textInput = parseInt(diceTextinput.value);
    console.log(textInput);

    // NUM GENERATOR
    let randomNum = Math.floor(Math.random() * 6 + 1);
    console.log(randomNum);

    // 2 NUMBERS SUMMARY
    numberSum(textInput, randomNum);

    let numTot = numberSum(textInput, randomNum)
    console.log(numTot);
    // CHECK IF PARI O DISPARI

    numChecker(numTot)

    // WIN/LOOSE
    if (numChecker(numTot) === false) {
        document.getElementById("diceResult").innerHTML = "HAI VINTO!"
        console.log("hai vinto");
    }
    else {
        document.getElementById("diceResult").innerHTML = "HAI PERSO!"
        console.log("hai perso");
    }

    // NUMBER SHOWER

    document.getElementById("playerNum").innerHTML = textInput;

    document.getElementById("pcNum").innerHTML = randomNum;

    document.getElementById("totNum").innerHTML = numberSum(textInput, randomNum);

});