//Establishes three digit number with unique digits

var answer = produceNumberWithUniqueDigits();

var proceed = false;

function produceNumberWithUniqueDigits() {

    var uniqueNumber = (Math.floor(Math.random() * 898) + 101).toString();

    for (var n = 0; n < uniqueNumber.length - 1; n++) {

        if (n == 0) {
            if (uniqueNumber.charAt(n) == uniqueNumber.charAt(n + 1) || uniqueNumber.charAt(n) == uniqueNumber.charAt(n + 2)) {
                return produceNumberWithUniqueDigits();
            }
        }
        if (n == 1) {
            if (uniqueNumber.charAt(n) == uniqueNumber.charAt(n + 1)) {
                return produceNumberWithUniqueDigits();
            } else {
                return uniqueNumber;
            }
        }
    }
}

var displayResults = [];
var screenResults = "";

//Creates an empty array to store objects
var otherArray = []

document.getElementById('guess').setAttribute('maxlength', '3')

$('.btn').on('click', function(e) {
    e.preventDefault();
    passOrFail();
    if (proceed == true) {
        check();
    } else {
        alert("Pick a number bigger than 100");
    };
})

//Verifies a three digit number has been entered
function passOrFail() {
    var formValue = document.getElementById("guess").value;
    if (parseInt(formValue) > 99) {
        proceed = true;
    } else {
        proceed = false;
    }
}

//Checks answer and returns a string containing pico,fermi, or bagels
function check() {
    var newNode = document.createElement("p");
    var formValue = document.getElementById("guess").value;
    var text = document.createTextNode(formValue);

    var guessString = formValue;
    var myObject = {
        guess: guessString
    }

    otherArray.push(myObject);

    var arrayLength = otherArray.length;

    for (var i = 0; i < answer.length; i++) {
        if (answer.toString().charAt(i) == guessString.charAt(i)) {
            var addToDisplayResults = {
                index: i,
                result: "Fermi"
            };
            displayResults.push(addToDisplayResults);
        };
    }

    for (var j = 0; j < answer.length; j++) {

        for (var k = 0; k < guessString.length; k++) {
            if (k != j) {
                if (answer.toString().charAt(j) == guessString.charAt(k)) {
                    var addToDisplayResults = {
                        index: k,
                        result: "Pico"
                    };
                    displayResults.push(addToDisplayResults);
                };
            }
        }
    }

    if (displayResults.length == 0) {
        var addToDisplayResults = {
            index: 0,
            result: "Bagels"
        };
        displayResults.push(addToDisplayResults);
    }

    for (var x = 0; x < answer.length; x++) {
        for (var y = 0; y < displayResults.length; y++) {
            if (displayResults[y].index == x) {
                screenResults += displayResults[y].result + " ";
            }
        }
    }



    if (guessString == answer) {
        alert("You won!");
        var newNode = document.createElement("p");
        var formValue = document.getElementById("guess").value;
        var text = document.createTextNode(arrayLength + ":" + " " + formValue + " - " + "Winning Number");
        newNode.appendChild(text);
        document.getElementById("placeEntry").appendChild(newNode);
        var entry = document.getElementById("entry");
        entry.innerHTML = answer;
        var element = document.getElementById('newForm');
        element.parentNode.removeChild(element);
        return
    } else {
        createNewRow(screenResults.trim());
        displayResults = [];
        screenResults = "";
    }
}

//Writes the results on the page
function createNewRow(hint) {
    var arrayLength = otherArray.length
    if (arrayLength == 19) {
        alert("Last Turn");
    }
    if (arrayLength == 20) {
        alert("You Lost");
        var newNode = document.createElement("p");
        var formValue = document.getElementById("guess").value;
        var text = document.createTextNode(arrayLength + ":" + " " + formValue + " - " + hint);
        newNode.appendChild(text);
        document.getElementById("placeEntry").appendChild(newNode);
        var getRidOf = document.getElementById('newForm');
        getRidOf.parentNode.removeChild(getRidOf);
        var entry = document.getElementById("entry");
        entry.innerHTML = answer;
        return
    }
    var newNode = document.createElement("p");
    var formValue = document.getElementById("guess").value;
    var text = document.createTextNode(arrayLength + ":" + " " + formValue + " - " + hint);
    newNode.appendChild(text);
    document.getElementById("placeEntry").appendChild(newNode);
    document.getElementById("guess").value = '';
}
