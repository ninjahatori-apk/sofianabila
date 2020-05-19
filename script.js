// Menampilkan number pada screen
const calculatorScreen = document.querySelector(".calculator-screen")

const updateScreen = (number) => {
  calculatorScreen.value = number
}

const numbers = document.querySelectorAll(".number")

numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    console.log(event.target.value)
  })
})

let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'

const inputNumber = (number) => {
  if (currentNumber === '0') {
    currentNumber = number
  } else {
    currentNumber += number
  }
}

numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    inputNumber(event.target.value)
    updateScreen(currentNumber)
  })
})

// memasukan operator
const operators = document.querySelectorAll(".operator")

operators.forEach((operator) => {
  operator.addEventListener("click", (event) => {
    inputOperator(event.target.value)
  })
})

const inputOperator = (operator) => {
  if (calculationOperator === '') {
    prevNumber = currentNumber
  }
  calculationOperator = operator
  currentNumber = '0'
}

// sama dengan
const equalSign = document.querySelector('.equal-sign')

equalSign.addEventListener('click', () => {
  calculate()
  updateScreen(currentNumber)
})

// Menghitung Bilangan dengan pilihan tombol operator
const calculate = () => {
  let result = ''
  switch (calculationOperator) {
    case "+":
      result = (parseFloat(+prevNumber)*10 + parseFloat(+currentNumber)*10)/10
      break
    case "-":
      result = (parseFloat(prevNumber)*10 - parseFloat(currentNumber)*10)/10
      break
    case "*":
      result = (parseFloat(prevNumber)*10 * parseFloat(currentNumber)*10)/100
      break
    case "/":
      result = parseFloat(prevNumber) / parseFloat(currentNumber)
      break
    default:
      return
  }
  currentNumber = result
  calculationOperator = ''
}

// clear / AC
const clearAll = () =>  {
  prevNumber = ''
  calculationOperator = ''
  currentNumber = '0'
}

const clearBtn = document.querySelector('.all-clear')

clearBtn.addEventListener('click', () => {
  clearAll()
  updateScreen(currentNumber)
})

// input decimal
inputDecimal = (dot) => {
  if (currentNumber.includes('.')) {
    return
  }
  currentNumber += dot
}

const decimal = document.querySelector('.decimal')

decimal.addEventListener('click', (event) => {
  inputDecimal(event.target.value)
  updateScreen(currentNumber)
})

// persen %
const persen = document.querySelector (".percentage")

persen.addEventListener ("click", (event) => {
    inputPersen(event.target.value)
    updateScreen(currentNumber)
})

const inputPersen = () => {
    currentNumber /= 100
}
