const numbers = document.querySelectorAll('.number');
const result = document.querySelector('#result')
const operators = document.querySelectorAll('.operator');
const reset = document.querySelector('.reset');
const equal = document.querySelector('.equal');

console.log(operators);
console.log(numbers);

let firstNum = "";

for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    number.addEventListener('click', function() {
        console.log(this.innerHTML);
        result.innerHTML += number.innerHTML;
    })
}
    


let operatorValue = "";
for (let x = 0; x < operators.length; x++) {
    const operator = operators[x];
    operator.addEventListener('click', function () {
        firstNum = parseInt(result.innerHTML);
        console.log(this.innerHTML);
        operatorValue = operator.innerHTML;
        result.innerHTML = "";
        console.log(firstNum, operatorValue);
        
    })

}

let secondNum = "";
let equalValue = "";



equal.addEventListener('click', function() {
    secondNum = parseInt(result.innerHTML);
    const finalResult = calculator(firstNum, secondNum, operatorValue);
    result.innerHTML = finalResult;
    
    

})

reset.addEventListener('click', function(){
    firstNum = "";
    secondNum = "";
    result.innerHTML = "";
})
// for (let y = 0; y < equal; y++) {
//     const equalcalc = equal[y];
//     equalcalc.addEventListener('click', function () {
//         secondNum = result.innerHTML;
//         console.log(this.innerHTML);
//         equalValue = equal.innerHTML;
//         result.innerHTML = "";
//         console.log(secondNum, equalValue);

//     })
// }






