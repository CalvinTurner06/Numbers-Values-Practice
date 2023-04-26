let operand1 = '';
let operand2 = '';
let operator = '';
let result = '';

function handleClick(value) {
  if (value === '+' || value === '-' || value === '*' || value === '/') {
    operator = value;
  } else if (value === '=') {
    result = calculate();
    document.getElementById('display').value = result;
    operand1 = result;
    operand2 = '';
    operator = '';
  } else if (value === 'C') {
    operand1 = '';
    operand2 = '';
    operator = '';
    result = '';
    document.getElementById('display').value = '';
  } else {
    if (operator === '') {
      operand1 += value;
      document.getElementById('display').value = operand1;
    } else {
      operand2 += value;
      document.getElementById('display').value = operand2;
    }
  }
}

function calculate() {
  let num1 = parseFloat(operand1);
  let num2 = parseFloat(operand2);
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num1 / num2;
    default:
      return '';
  }
}
