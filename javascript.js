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


const keys = document.querySelector('.keys');

for(let i = 0; i < 16; i++){

    const buttons = document.createElement('div');
    buttons.classList.add('buttons');
    if( i === 3){
        buttons.textContent = 'Cls';
    }else if(i === 7){
        buttons.textContent = '-';
    }else if(i === 11){
        buttons.textContent = '/';
    }else if (i === 15){
        buttons.textContent = '*';
    }else{
        buttons.textContent = `${i}`;
    }
    

    keys.appendChild(buttons);
}

