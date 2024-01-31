let numberOnScreen = document.querySelector('#number-on-screen');
// console.log(parseInt(numberOnScreen.textContent))

const clearBtn = document.querySelector('#clear-button');

function inputClear() {
    numberOnScreen.textContent = '0';
}

clearBtn.addEventListener('click', inputClear);

function insertNumber(number) {
    if (clearOnNextInput) {
        clearOnNextInput = false
        numberOnScreen.textContent = '0';
    }

    numberOnScreen.textContent = parseFloat(numberOnScreen.textContent + number);
}

for (let num = 0; num <= 9; num++) {
    document
        .querySelector(`#button-${num}`)
        .addEventListener('click', function () {
            insertNumber(num);
        });
}

const dotBtn = document.querySelector('#dot-button');

function insertDot() {
    if (parseFloat(numberOnScreen.textContent) === 0) {
        numberOnScreen.textContent = '0';
    }

    if (!numberOnScreen.textContent.includes('.')) {
        numberOnScreen.textContent += '.';
    }
}

dotBtn.addEventListener('click', insertDot);

let clearOnNextInput = true;
let operation = '';
let firstNum = 0;
let secondNum = 0;
let result = 0;

const plusBtn = document.querySelector('#plus-button');

function insertPlus() {
    operation = '+';
    firstNum = parseFloat(numberOnScreen.textContent);
    clearOnNextInput = true;
}

plusBtn.addEventListener('click', insertPlus);

const minusBtn = document.querySelector('#minus-button');

function insertMinus() {
    operation = '-';
    firstNum = parseFloat(numberOnScreen.textContent);
    clearOnNextInput = true;
}

minusBtn.addEventListener('click', insertMinus);

const multiplyBtn = document.querySelector('#multiply-button');

function insertMultiply() {
    operation = '*';
    firstNum = parseFloat(numberOnScreen.textContent);
    clearOnNextInput = true;
}

multiplyBtn.addEventListener('click', insertMultiply);

const divideBtn = document.querySelector('#divide-button');

function insertDivide() {
    operation = '/';
    firstNum = parseFloat(numberOnScreen.textContent);
    clearOnNextInput = true;
}

divideBtn.addEventListener('click', insertDivide);

const equalBtn = document.querySelector('#equal-button');

function equal() {
    secondNum = parseFloat(numberOnScreen.textContent);
    switch (operation) {
        case '+' :
            result = firstNum + secondNum;
            break;
        case '-' :
            result = firstNum - secondNum;
            break;
        case '*' :
            result = firstNum * secondNum;
            break;
        case '/' :
            result = firstNum / secondNum;
            break;
    }
    numberOnScreen.textContent = result;
}


equalBtn.addEventListener('click', equal);


///// DO NOT GO DOWN !

document.addEventListener('keydown', (event) => {
    if (event.key === 'Backspace') {
        const screenText = numberOnScreen.textContent;
        let cutText = screenText.substring(0, screenText.length - 1);

        if (cutText === ''){
            cutText = '0';
        }

        numberOnScreen.textContent = cutText;
    }
});

document.addEventListener('keydown', (event) => {
    for (let i = 0; i <= 9; i++)
    if (event.key === `${i}`) {
        insertNumber(i);
    }

    if (event.key === '+') {
        insertPlus();
    }
    if (event.key === '-') {
        insertMinus();
    }
    if (event.key === '*') {
        insertMultiply();
    }
    if (event.key === '/') {
        insertDivide();
    }
    if (event.key === 'Enter') {
        equal();
    }
    if (event.key === 'c') {
        inputClear();
    }
    if (event.key === '.') {
        insertDot();
    }
});

