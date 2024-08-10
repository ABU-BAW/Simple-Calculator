//creating operation functions

function add(num, num1){
    return sum = num + num1;
}

function subtract(num, num1){
    return difference = num - num1;
}

function multiply(num, num1){
    return product = num * num1;
}

function divide(num, num1){
    return quotient = num / num1;
}


// Global variables

let firstOperand = null, 
    operator = null,
    waitingForSecondOperand= false;

function operate(leftOperand, operator,rightOperand){
    switch (operator){
        case '+':
            return add(leftOperand, rightOperand);
        case '-':
            return subtract(leftOperand, rightOperand);
            
        case '*':
            return multiply(leftOperand, rightOperand);
            
        case '/':
            return divide(leftOperand, rightOperand);
           
        default:
            return rightOperand;
    }
        
}


const leftKeys = document.querySelector('.left-keys');
const display = document.querySelector('.display');

//update display function
let displayValue = '';

function updateDisplay(value) {
    if (waitingForSecondOperand) {
        displayValue = value;
        waitingForSecondOperand = false;
    } else {
        displayValue = displayValue === '0' ? value : displayValue + value;
    }
    display.textContent = displayValue;
}

function handleOperator(nextOperator) {
    const inputValue = parseFloat(displayValue);
    
    if (operator && waitingForSecondOperand) {
        operator = nextOperator;
        return;
    }

    if (firstOperand === null && !isNaN(inputValue)) {
        firstOperand = inputValue;
    } else if (operator) {
        const result = operate(firstOperand, operator, inputValue);
        displayValue = `${parseFloat(result.toFixed(7))}`;
        firstOperand = result;
    }

    waitingForSecondOperand = true;
    operator = nextOperator;
    display.textContent = displayValue;
}

for(let i = 0; i < 12; i++){
    const leftButtons = document.createElement('div');
    leftButtons.classList.add('left-buttons');
    if (i === 10) {
        leftButtons.textContent = '=';
        leftButtons.addEventListener('click', () => {
            if (operator && firstOperand !== null) {
                handleOperator('=');
            }
        });
    } else if (i === 11) {
        leftButtons.textContent = '+';
        leftButtons.addEventListener('click', () => handleOperator('+'));
    } else {
        leftButtons.textContent = `${i}`;
        leftButtons.addEventListener('click', () => updateDisplay(i.toString()));
    }
    leftKeys.appendChild(leftButtons);
}

const rightKeys = document.querySelector('.right-keys');

//function to clear the screen
function clearDisplay(){
    displayValue = '0';
    firstOperand = null;
    operator = null;
    waitingForSecondOperand = false;
    display.textContent = displayValue;
}


for(let j = 0; j < 4; j++){

    const rightButtons = document.createElement('div');
    rightButtons.classList.add('right-buttons');

    if( j === 0){
        rightButtons.textContent = 'CLs';
        rightButtons.addEventListener('click', clearDisplay);
    }else if(j === 1){
        rightButtons.textContent = '-';
        rightButtons.addEventListener('click', () => handleOperator('-'));
    }else if(j === 2){
        rightButtons.textContent = '/';
        rightButtons.addEventListener('click', () => handleOperator('/'))
    }else if(j === 3){
        rightButtons.textContent = '*';
        rightButtons.addEventListener('click', () => handleOperator('*'));
    }

    rightKeys.appendChild(rightButtons);
}

