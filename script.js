//Generate random integer number between 1 and 100
const randomNumber = Math.floor(Math.random() * (100 - 1 + 1)) + 1;

//Define document elements
const checkBtn = document.getElementById("checkButton");
let inputNumber = document.getElementById("inputNumberField");
let resultField = document.getElementById("result");
let iconField = document.getElementById("icon");
let attempts = 0;

//Console log requested number (for testing purpose)
console.log(randomNumber);

//Add event listener and check if input number is valid
checkBtn.addEventListener("click", function() {
    attempts++;
    if ((inputNumber.value < 1) || (inputNumber.value > 100)) {
        iconField.src="images/cross-circle.svg"
        resultField.style.color = "#DA4453";
        resultField.innerHTML = "Please enter a valid number<br>(between 1 and 100)<br>and try again.";
    }
    else {
        compareNumbers();
    }
});

// Compare number with requested number
function compareNumbers() {
    if (inputNumber.value > randomNumber) {
        iconField.src="images/minus-circle.svg"
        resultField.style.color = "#37BC9B";
        resultField.innerHTML = "Better luck next time.<br>Requested number is smaller.<br>Please try again.";
    }
    else if (inputNumber.value < randomNumber) {
        iconField.src="images/plus-circle.svg"
        resultField.style.color = "#37BC9B";
        resultField.innerHTML = "Better luck next time.<br>Requested number is greater.<br>Please try again.";
    }
    else {
        iconField.src="images/checkmark-circle.svg"
        resultField.style.color = "#8CC152";
        resultField.innerHTML = `Congratulations!<br>Number is correct after<br>${attempts} attempt.`;
    }
}
