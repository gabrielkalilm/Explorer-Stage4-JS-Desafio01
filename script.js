alert("Olá! Insira dois números e descubra a sua soma, subtração, multiplicação, divisão, se a sua soma gera um número par e se ambos os números inseridos são iguais")

let firstNumber = prompt('Insira o primeiro número')
let secondNumber = prompt('Insira o segundo número')

let sum = Number(firstNumber) + Number(secondNumber)
let sub = Number(firstNumber) - Number(secondNumber)
let mult = Number(firstNumber) * Number(secondNumber)
let div = Number(firstNumber) / Number(secondNumber)

alert(`A soma dos dois números inseridos é ${sum}`)
alert(`A subtração dos dois números inseridos é ${sub}`)
alert(`A multiplicação dos dois números inseridos é ${mult}`)
alert(`A divisão dos dois números inseridos é ${div}`)

let isSumPair = sum % 2
switch(isSumPair) {
  case 0: 
  alert(`A soma dos dois números inseridos é par`)
  break
  default:
  alert(`A soma dos dois números inseridos é ímpar`)
}

if (firstNumber == secondNumber){
  alert(`Os dois números inseridos são iguais`)
} else {
  alert(`Os dois números inseridos são diferentes`)
}
