
// UNDO BTN PALI
let undoBtnInput = document.getElementById("undoBtn");

undoBtnInput.addEventListener("click", function(){

    location.reload();

});

// SEND BTN PALI
let paliBtnInput = document.getElementById("paliBtn");

paliBtnInput.addEventListener("click", function() {

    let paliTextInput = document.getElementById("paliText");
    textImput1 = paliTextInput.value;

    console.log(textImput1);

    paliInverter (textImput1);

    reversedWord = paliInverter(textImput1)

    console.log(reversedWord);

    paliCheck (textImput1, reversedWord);

    if (paliCheck(textImput1, reversedWord) === true) {
        console.log("è palindroma");

        document.getElementById("paliResult").innerHTML = "LA PAROLA E' PALINDROMA"
    }

    else {
        console.log("non è palindroma");

        document.getElementById("paliResult").innerHTML = "LA PAROLA NON E' PALINDROMA"


    }

});