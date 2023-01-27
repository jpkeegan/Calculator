const screenDisplay = document.querySelector(".display")
const buttons = document.querySelectorAll("button")
const historyDisplay = document.querySelector(".history")

let equation = []
let calculation
let history = []
let num;


function calculate(button){
    const value = button.textContent;

    if(value === "CE") {
        equation = []
        screenDisplay.textContent = '.'
        history = []
        historyDisplay.textContent = 'History'
    } else if (value === "=") {
        let result = eval(calculation);
        screenDisplay.textContent = result;
        equation = [];
        history.push(result);
        num = history.join("\n");
        historyDisplay.textContent = num;


    } else {
        equation.push(value)
        calculation = equation.join(" ")
        screenDisplay.textContent = calculation
    }
}
buttons.forEach(button => button.addEventListener('click', () => calculate(button)))
