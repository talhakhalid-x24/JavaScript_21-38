// Task 1

var firstName1 = prompt("Enter your first name")
var lastName1 = prompt("Enter your last name")
var fullName1 = firstName1 +" "+ lastName1;
document.writeln("My name is "+fullName1)

// Task 2

document.writeln("<br><br>")
var favPhoneModel = prompt("Enter your favourite mobile phone")
var lengthOfPhone = favPhoneModel.length;
document.writeln("My favourite phone is: "+favPhoneModel)
document.writeln("<br>Length of string: "+lengthOfPhone)

// Task 3

document.writeln("<br><br>")
var countryName1 = "Pakistani";
document.writeln("String: "+countryName1)
var positionOfN = countryName1.indexOf('n')
document.writeln("<br>Index of 'n':"+positionOfN)

// Task 4

document.writeln("<br><br>")
var greeting = "Hello World";
document.writeln("String: "+greeting)
var positionOfL = greeting.lastIndexOf('l')
document.writeln("<br>Last Index of 'l': "+positionOfL)

// Task 5

document.writeln("<br><br>")
var countryName2 = "Pakistani";
document.writeln("String: "+countryName2)
var positionOfI = countryName2.indexOf('i')
document.writeln("<br>Character Index of 'i':"+positionOfI)

// Task 6

document.writeln("<br><br>")
var firstName2 = prompt("Enter your first name")
var lastName2 = prompt("Enter your last name")
var fullName2 = firstName2.concat(" "+lastName2);
document.writeln("My name is "+fullName2)

// Task 7

document.writeln("<br><br>")
var cityName = 'Hyderabad';
document.writeln('City: '+cityName)
for(var i=0;i<cityName.length;i++){
    if(cityName.slice(i,i+5)==="Hyder"){
        var replaceCity = "Islam" +cityName.slice(i+5)
    }
}
document.writeln('<br>After Replacement: '+replaceCity)

// Task 8

document.writeln("<br><br>")
var message = "Ali and Sami are best friends. They play cricket and football together."; 
document.writeln(message);
var changeMessage = message.replace(/and/g,'&');
document.writeln('<br>New Message: '+changeMessage)

// Task 9

document.writeln("<br><br>")
var valueInString = "472";
document.writeln('Value: '+valueInString)
document.writeln('<br>Type: '+typeof(valueInString))
var valueInNumber = parseInt(valueInString)
document.writeln('<br>Value: '+valueInNumber)
document.writeln('<br>Type: '+typeof(valueInNumber))

// Task 10

document.writeln("<br><br>")
var input = prompt("Conversion of lowercase to uppercase");
var inputInUpper = input.toUpperCase();
document.writeln("User input: "+input)
document.writeln("<br>Upper case: "+inputInUpper)

// Task 11

document.writeln("<br><br>")
var input1 = prompt("Conversion in title case");
var firstCharUpper = input1.slice(0,1).toUpperCase()
var remainCharLower = input1.slice(1).toLowerCase()
var title = firstCharUpper + remainCharLower;
document.writeln('User input: '+input1)
document.writeln('<br>Title Case: '+title)

// Task 12

document.writeln("<br><br>")
var num = 35.36;
var chngInString = num.toString().replace('.','')
document.writeln('Number: '+num)
document.writeln('<br>Result: '+chngInString)

// Task 13

document.writeln("<br><br>")
var userName = prompt('Enter your username')
for(var i = 0;i < userName.length; i++){
    if(userName.charAt(i) === '!' || userName.charAt(i) === ',' || userName.charAt(i) === '.' || userName.charAt(i) === '@'){
        alert('Please enter a valid username')
    }
}

// Task 14

document.writeln("<br><br>")
var bakery = new Array('cake', 'apple pie', 'cookie', 'chips', 'patties')
var order = prompt('Welcome to ABC Bakery. What do you want to order Sir/Mam?')
var index = [0,1,2,3,4]
order = order.toLowerCase();
for(var i=0;i<bakery.length && index.length ;i++){
    if(order === bakery[i]){
        document.writeln('<br>'+order+' is available at index '+index[i]+' in our bakery.')
    }
    else{
        document.writeln('<br>We are sorry. '+order+' is not available in our bakery.')
    }    
}

// Task 15

document.writeln("<br><br>")
var pswrd = prompt('Enter a password')
document.writeln('Enter password: '+pswrd)
if(pswrd === String || Number){
    if(pswrd.length > 6){
        if(pswrd.startsWith() === Number){
            document.writeln('<br>Password can not begin with a number')
            document.writeln('<br>Please Enter a valid password')
        }
    }
    else{
        document.writeln('<br>Password must be contain more than 6 characters')
    }
}

// Task 16

document.writeln("<br><br>")
var university = 'University of Karachi';
var convertInArr = university.split('');
for(var i=0; i< convertInArr.length;i++){
    document.writeln(convertInArr[i]+'<br>')
}

// Task 17

document.writeln("<br><br>")
var aChar = prompt('Enter a word')
document.writeln('User Input: '+aChar)
document.writeln('<br>Last character of input: '+aChar.slice(aChar.length - 1))

// Task 18

document.writeln("<br><br>")
var para ='The quick brown fox jumps over the lazy dog';
var upperPara = para.toLowerCase()
document.writeln('Text: '+para)
var count = upperPara.match(/the/g).length;
document.writeln('<br>There are '+count+' occurences of the word "the"')