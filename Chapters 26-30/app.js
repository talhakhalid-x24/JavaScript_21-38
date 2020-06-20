// Task 1

var aNumber = parseFloat(prompt('Enter a positive float number',3.45214))
document.writeln('Number: '+aNumber)
var roundAnumber = Math.round(aNumber);
document.writeln('<br>Round off value: '+roundAnumber)
var floorAnumber = Math.floor(aNumber)
document.writeln('<br>Floor value: '+floorAnumber)
var ceilAnumber = Math.ceil(aNumber)
document.writeln('<br>Ceil value: '+ceilAnumber)


// Task 2

document.writeln("<br><br>")
var aNumber1 = parseFloat(prompt('Enter a negative float number',-2.673))
document.writeln('Number: '+aNumber1)
var roundAnumber1 = Math.round(aNumber1);
document.writeln('<br>Round off value: '+roundAnumber1)
var floorAnumber1 = Math.floor(aNumber1)
document.writeln('<br>Floor value: '+floorAnumber1)
var ceilAnumber1 = Math.ceil(aNumber1)
document.writeln('<br>Ceil value: '+ceilAnumber1)

// Task 3

document.writeln("<br><br>")
var aNumber2 = parseInt(prompt('Enter a number'))
var absoluteAnumber = Math.abs(aNumber2)
document.writeln('The absolute value of '+aNumber2+' is '+absoluteAnumber)

// Task 4

document.writeln("<br><br>")
var diceValue = Math.floor(Math.random() * 6 + 1)
document.writeln('Random dice value: '+diceValue)
diceValue = Math.floor(Math.random() * 6 + 1)
document.writeln('<br>Random dice value: '+diceValue)

// Task 5

document.writeln("<br><br>")
var tossValue = Math.floor(Math.random() * 2 + 1)
if(tossValue === 2){
    document.writeln(tossValue+'<br>Random coin value: Heads')
}
else if(tossValue === 1){
    document.writeln(tossValue+'<br>Random coin value: Tails')
}

// Task 6

document.writeln("<br><br>")
var aNumber4 = Math.floor(Math.random() * 100 + 1);
document.writeln('Random number between 1 and 100: '+aNumber4)

// Task 7

document.writeln("<br><br>")
var weight = parseInt(prompt('Enter your weight in kilogram'))
var weightInKg = (Math.random() + weight).toFixed(1);
document.writeln('The weight of user is '+weightInKg+' kilograms')

// Task 8

document.writeln("<br><br>")
var aNumber5 = parseInt(prompt('Enter a number between 1 and 10'))
var randomNumber = Math.floor(Math.random() * 10 + 1)
if(aNumber5 === randomNumber){
    document.writeln('Congratulation! Your answer is correct')
}
else{
    document.writeln('Try Again')
}