let currentNumber = '';
let storedNumber = '';
let operation = '';

function addNumber(number) {
  currentNumber += number;
  document.getElementById('output').innerText = currentNumber;
}

function setOperation(op) {
  storedNumber = currentNumber;
  currentNumber = '';
  operation = op;
}

function calculateResult() {
  let result;
  const num1 = parseFloat(storedNumber);
  const num2 = parseFloat(currentNumber);

  if (operation === '+') result = num1 + num2;
  if (operation === '-') result = num1 - num2;
  if (operation === '*') result = num1 * num2;
  if (operation === '/') result = num1 / num2;

  currentNumber = result.toString();
  document.getElementById('output').innerText = currentNumber;
}

function clearCalculator() {
  currentNumber = '';
  storedNumber = '';
  operation = '';
  document.getElementById('output').innerText = '0';
}

function addDecimal() {
  if (!currentNumber.includes('.')) {
    currentNumber += '.';
    document.getElementById('output').innerText = currentNumber;
  }
}
