class Calculator {
    constructor(inputField, resultField) {
      this.inputField = inputField;
      this.resultField = resultField;
      this.inputField.innerText = 0;
      this.resultField.innerText = 0;
      this.previousState = "clear";
      this.previousOp = undefined;
      this.storedResult = 0;
      this.firstBtn = 0;
    }

    calculate(num) {
      switch(this.previousOp) {
        case "mod":
          this.storedResult %= num
          break;

        case "divide":
          this.storedResult /= num
          break;

        case "add":
          this.storedResult += num
          break;

        case "mult":
          this.storedResult *= num
          break;

        case "sub":
          this.storedResult -= num
          break;

        default:
          break;
      }

      return this.storedResult;
    }

    clearDisplay() {
        this.inputField.innerText = 0;
        this.resultField.innerText = 0;
        this.previousState = "clear";
        this.previousOp = undefined;
        this.storedResult = 0;
        this.firstBtn = 0;
    }
}

const inputField = document.getElementById('input');
const resultField = document.getElementById('result');
const calc = new Calculator(inputField, resultField);

const numBtns = document.querySelectorAll('.number');
const opBtns = document.querySelectorAll('.operator');
const equalsBtn = document.getElementById('equals');
const clearBtn = document.getElementById('AC');

numBtns.forEach(button => {
  button.addEventListener('click', () => {
    if(calc.previousState === "clear") {
      calc.firstBtn = 1;
      calc.inputField.innerText = button.innerText;
    }
    else {
      calc.inputField.innerText += button.innerText;
    }

    calc.previousState = "number";
  })
})

opBtns.forEach(button => {
  button.addEventListener('click', () => {
    if(calc.previousState === "clear") {
      calc.resultField.innerText = calc.inputField.innerText;
      calc.inputField.innerText = button.innerText;
      calc.previousState = "operator";
      calc.previousOp = button.id;
    }
    else if(calc.firstBtn === 1) {
      calc.firstBtn = 0;
      calc.storedResult = Number(calc.inputField.innerText);
      calc.resultField.innerText = calc.inputField.innerText;
      calc.inputField.innerText = button.innerText;
      calc.previousState = "operator";
      calc.previousOp = button.id;
    }
    else if(calc.previousState === "operator") {
    }
    else {
      let num = Number(calc.inputField.innerText.slice(1));
      let result = calc.calculate(num);
      calc.resultField.innerText = result;
      calc.inputField.innerText = button.innerText;
      calc.previousState = "operator";
      calc.previousOp = button.id;
    }
  })
})

equalsBtn.addEventListener('click', () => {
  if(calc.previousState === "clear" || calc.firstBtn === 1) {
    return;
  }
  num = Number(calc.inputField.innerText.slice(1));
  let result = calc.calculate(num);
  calc.clearDisplay();
  calc.inputField.innerText = result;
  calc.resultField.innerText = result;
  calc.storedResult = result;
})

clearBtn.addEventListener('click', () => {
  calc.clearDisplay();
})



