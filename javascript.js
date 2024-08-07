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

let leftOperand, 
    operator,
    rightOperand;

function operate(leftOperand, operator,rightOperand){
    switch (operator){
        case 'sum':
            operator = add(leftOperand, rightOperand);
            break;
        case 'subtract':
            operator = subtract(leftOperand, rightOperand);
            break;
        case 'multiply':
            operator = multiply(leftOperand, rightOperand);
            break;
        case 'divide':
            operator = divide(leftOperand, rightOperand);
            break;
        default:
            return 'invalid operation';
    }
        return operator;
}


const leftKeys = document.querySelector('.left-keys');
const display = document.querySelector('.display');

//update display function
let displayValue = '';

function updateDisplay(value){
    displayValue += value;
    display.textContent = displayValue;
}

for(let i = 0; i < 12; i++){

    const leftButtons = document.createElement('div');
    leftButtons.classList.add('left-buttons');
    if( i === 10){
        leftButtons.textContent = '=';
    }else if(i === 11){
        leftButtons.textContent = '+';
    }else{
        leftButtons.textContent = `${i}`;
        leftButtons.addEventListener('click', () => updateDisplay(i));
    }

    leftKeys.appendChild(leftButtons);
}

const rightKeys = document.querySelector('.right-keys');

//function to clear the screen
function clearDisplay(){
    displayValue = '';
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
    }else if(j === 2){
        rightButtons.textContent = '/';
    }else if(j === 3){
        rightButtons.textContent = '*';
    }

    rightKeys.appendChild(rightButtons);
}

