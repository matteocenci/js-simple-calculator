const numbers = document.querySelectorAll('.numbers button');
const result = document.querySelector('#result')

console.log(numbers);

for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    number.addEventListener('click', function() {
        console.log(this.innerHTML);
        result.innerHTML += number.innerHTML;

    })

}
    


    
    
const operators = document.querySelectorAll('.operators button');
console.log(operators);




for (let x = 0; x < operators.length; x++) {
    const operator = operators[x];
    operator.addEventListener('click', function () {
        console.log(this.innerHTML);
        
    })

}