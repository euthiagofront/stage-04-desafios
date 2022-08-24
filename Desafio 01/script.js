let catchFirstNumber = Number(prompt('Digite o primeiro número:'));
let catchSecondNumber = Number(prompt('Digite o segundo número:'));

let numbersAddition = catchFirstNumber + catchSecondNumber;
let numbersSubtraction = catchFirstNumber - catchSecondNumber;
let numbersMultiplication = catchFirstNumber * catchSecondNumber;
let numbersDivision = catchFirstNumber / catchSecondNumber;
let numbersRest = catchFirstNumber % catchSecondNumber;

var total = numbersAddition / 2;
var result = total % 2 == 0 ? 'Par' : 'Impar';

var match = catchFirstNumber === catchSecondNumber ? 'São iguais' : 'São diferentes'

alert(`A soma dos dois números é: ${numbersAddition}`);
alert(`A subtração dos dois números é: ${numbersSubtraction}`);
alert(`A multiplicação dos dois números é: ${numbersMultiplication}`);
alert(`A divisão dos dois números é: ${numbersDivision}`);
alert(`O resto da divisão dos dois números é: ${numbersRest}`);
alert(`A soma dos dois números é: ${result}`);
alert(`Os números inseridos são: ${match}`);