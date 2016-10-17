//Establishes number
var ones = Math.floor((Math.random() * 10))
var tens = Math.floor((Math.random() * 10))
var hundreds = Math.floor((Math.random() * 10))

var onesString = ones.toString()
var tensString = tens.toString()
var hundredsString = hundreds.toString()

//Display when debugging
/*var entry = document.getElementById("entry")
entry.innerHTML = (hundreds * 100) + (tens * 10) + ones
*/
var myArray = [hundredsString, tensString, onesString]
//Creates an empty array to store objects
var otherArray = []

document.getElementById('guess').setAttribute('maxlength','3')

$('.btn').on('click', function(e) {
  e.preventDefault();
  check();
})
/*
sbmt.addEventListener("click", function(e) {
  e.preventDefault();
  check();
},false)
*/
function check() {
  var newNode = document.createElement("p")
  var formValue = document.getElementById("guess").value
  console.log(typeof formValue)
  var text = document.createTextNode(formValue)

  var guessString = formValue.toString().split("")
  var myObject = {
    guess: guessString
  }

  otherArray.push(myObject)

  var arrayLength = otherArray.length

  console.log(arrayLength)
  //Put && statements first
  if ((guessString[0] == hundredsString) && (guessString[1] == tensString) && (guessString[2] == onesString)) {
    alert("You won!")
    var newNode = document.createElement("p")
    var formValue = document.getElementById("guess").value
    var text = document.createTextNode(arrayLength +":" + " " + formValue + " - " + "Winning Number")
    newNode.appendChild(text)
    document.getElementById("placeEntry").appendChild(newNode)
    var entry = document.getElementById("entry")
    entry.innerHTML = (hundreds * 100) + (tens * 10) + ones
    var element = document.getElementById('newForm')
    element.parentNode.removeChild(element)
    return
  }
  if ((guessString[0] == hundredsString) && (guessString[1] == onesString) && (guessString[2] == tensString)) {
    var hint = "Fermi Pico Pico"
    createNewRow(hint)
    return
  }
  if ((guessString[1] == tensString) && (guessString[0] == onesString) && (guessString[2] == hundredsString)) {
    var hint = "Pico Fermi Pico"
    createNewRow(hint)
    return
  }
  if ((guessString[2] == onesString) && (guessString[0] == tensString) && (guessString[1] == hundredsString)) {
        var hint = "Pico Pico Fermi"
        createNewRow(hint)
        return
      }
  if (((guessString[0] == tensString) && (guessString[1] == onesString) && (guessString[2] == hundredsString))
      || ((guessString[0] == onesString) && (guessString[1] == hundredsString) && (guessString[2] == tensString))) {
        var hint = "Pico Pico Pico"
        createNewRow(hint)
        return
      }
  if (((guessString[0] !== hundredsString) && (guessString[1] == onesString) && (guessString[2] == tensString))
      || ((guessString[0] == onesString) && (guessString[1] !== hundredsString) && (guessString[2] == tensString))
      || ((guessString[0] == tensString) && (guessString[1] == onesString) && (guessString[2] !== hundredsString))
      || ((guessString[0] == onesString) && (guessString[1] !== tensString) && (guessString[2] == hundredsString))
      || ((guessString[0] == onesString) && (guessString[1] == hundredsString) && (guessString[2] !== tensString))
      || ((guessString[0] !== tensString) && (guessString[1] == onesString) && (guessString[2] == hundredsString))
      || ((guessString[0] !== onesString) && (guessString[1] == hundredsString) && (guessString[2] == tensString))
      || ((guessString[0] == tensString) && (guessString[1] !== onesString) && (guessString[2] == hundredsString))
      || ((guessString[0] == tensString) && (guessString[1] == hundredsString) && (guessString[2] !== onesString)))  {
        var hint = "Pico Pico"
        createNewRow(hint)
        return
      }
  if (((guessString[0] == hundredsString) && (guessString[1] == tensString) && (guessString[2] !== onesString))
      || ((guessString[0] !== hundredsString) && (guessString[1] == tensString) && (guessString[2] == onesString))
      || ((guessString[0] == hundredsString) && (guessString[1] !== tensString) && (guessString[2] == onesString))) {
      var hint = "Fermi Fermi"
      createNewRow(hint)
      return
      }
  if (((guessString[0] == onesString) && (guessString[1] == tensString) && (guessString[2] !== hundredsString))
      || ((guessString[0] == tensString) && (guessString[1] !== hundredsString) && (guessString[2] == onesString))
      || ((guessString[0] !== tensString) && (guessString[1] == hundredsString) && (guessString[2] == onesString))) {
        var hint = "Pico Fermi"
        createNewRow(hint)
        return
      }
  if (((guessString[0] == hundredsString) && (guessString[1] == onesString) && (guessString[2] !== tensString))
      || ((guessString[0] == hundredsString) && (guessString[1] !== onesString) && (guessString[2] == tensString))
      || ((guessString[0] !== onesString) && (guessString[1] == tensString) && (guessString[2] == hundredsString))) {
        var hint = "Fermi Pico"
        createNewRow(hint)
        return
      }
  if (((guessString[0] == hundredsString) && (guessString[1] !== tensString) && (guessString[2] !== onesString))
      || ((guessString[0] !== hundredsString) && (guessString[1] == tensString) && (guessString[2] !== onesString))
      || ((guessString[0] !== hundredsString) && (guessString[1] !== tensString) && (guessString[2] == onesString))) {
    var hint = "Fermi"
    createNewRow(hint)
    return
  }
  if ((guessString[0] == tensString) || (guessString[0] == onesString)
      || (guessString[1] == hundredsString) || (guessString[1] == onesString)
      || (guessString[2] == hundredsString) || (guessString[2] == tensString)) {
    var hint = "Pico"
    createNewRow(hint)
    return
  }
  if (((guessString[0] !== hundredsString) || (guessString[0] !== tensString) || (guessString[0] !== onesString))
      && ((guessString[1] !== hundredsString) || (guessString[1] !== tensString) || (guessString[1] !== onesString))
      && ((guessString[2] !== hundredsString) || (guessString[2] !== tensString) || (guessString[2] !== onesString))) {
        var hint = "Bagels"
        createNewRow(hint)
        return
      }
}

function createNewRow(hint) {
  var arrayLength = otherArray.length
  if (arrayLength == 19) {
    alert("Last Turn")
  }
  if (arrayLength == 20) {
    alert("You Lost")
    var newNode = document.createElement("p")
    var formValue = document.getElementById("guess").value
    var text = document.createTextNode(arrayLength +":" + " " + formValue + " - " + hint)
    newNode.appendChild(text)
    document.getElementById("placeEntry").appendChild(newNode)
    console.log(formValue)
    var getRidOf = document.getElementById('newForm')
    getRidOf.parentNode.removeChild(getRidOf)
    var entry = document.getElementById("entry")
    entry.innerHTML = (hundreds * 100) + (tens * 10) + ones
    return
  }
  var newNode = document.createElement("p")
  var formValue = document.getElementById("guess").value
  var text = document.createTextNode(arrayLength +":" + " " + formValue + " - " + hint)
  newNode.appendChild(text)
  document.getElementById("placeEntry").appendChild(newNode)
  document.getElementById("guess").value = ''
  console.log(formValue)
}
