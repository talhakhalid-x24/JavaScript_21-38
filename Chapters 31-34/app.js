// Task 1

var currentDate1 = new Date();
document.write(currentDate1)

// Task 2

var  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var currentDate2 = new Date();
var monthName=months[currentDate2.getMonth()];
alert('Current month: '+monthName)

// Task 3

var  day = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
var currentDate3 = new Date();
var dayName=day[currentDate3.getDay()];
alert('Today is '+dayName)

// Task 4

document.writeln("<br><br>")
var  day1 = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
var currentDate4 = new Date();
var dayName1=day1[currentDate4.getDay()];
if(dayName1 === 'Sat' || dayName1 === 'Sun'){
    document.write("It's Fun day")
}
else{
    document.write("It's working day")
}

// Task 5

document.writeln("<br><br>")
var currentDate5 = new Date();
var dateOfMonth = currentDate5.getDate(15);
if(dateOfMonth <= 15){
    document.write('First fifteen days of the month')
}
else{
    document.write('Last fifteen days of the month')
}

// Task 6

document.writeln("<br><br>")
var currentDate6 = new Date();
var currentTime6 = currentDate6.getTime();
document.write(currentDate6)
var givenDate = new Date('Jan 1, 1970');
var givenTime = givenDate.getTime();
var diffOfTime = currentTime6 - givenTime;
document.write('<br>Elapsed miliseconds since January 1, 1970: '+diffOfTime)
var timeInMin = diffOfTime/(1000*60)
document.write('<br>Elapsed minutes since January 1, 1970: '+timeInMin)

// Task 7

document.writeln("<br><br>")
var currentDate7 = new Date();
var getCurrentTime7 = currentDate7.getHours()
if(getCurrentTime7 < 12){
    document.write("It's A.M")
}
else{
    document.write("It's P.M")
}

// Task 8

document.writeln("<br><br>")
var currentDate8 = new Date(2020, 12, 0, 24, 0, -1)
document.write('Later Date: '+currentDate8)

// Task 9

document.writeln("<br><br>")
var ramzanDate = new Date('April 25, 2020').getTime();
var currentDate9 = new Date().getTime();
var remainTime = currentDate9 - ramzanDate;
var remainDays = Math.floor(remainTime/(1000*60*60*24))
document.write(remainDays+' days have passed since 1st Ramadan, 2020')

// Task 10

document.writeln("<br><br>")
var currentDate10 = new Date();
var beginDate = new Date('Jan 1, 2015');
var diffDate = currentDate10 - beginDate;
var passedSec = diffDate/1000;
document.write('On reference date '+currentDate10+',<br>'+passedSec+' seconds has passed since begin of 2015')

// Task 11

document.writeln("<br><br>")
var currentDate11 = new Date();
document.write('Current time: '+currentDate11)
var anHourAgo = currentDate11.setHours(currentDate11.getHours() - 1);
var anHourDate = new Date(anHourAgo)
document.write('<br>1 hour ago, it was '+anHourDate)

// Task 12

document.writeln("<br><br>")
var currentDate12 = new Date();
document.write('Current time: '+currentDate12)
var _100yearAgo = currentDate12.setFullYear(currentDate12.getFullYear() - 100);
var _100yearBack = new Date(_100yearAgo)
document.write('<br>100 years back, it was '+_100yearBack)

// Task 13

document.writeln("<br><br>")
var currentDate13 = new Date().getFullYear();
var ageDate = new Date('Oct 24, 1998').getFullYear();
var diffAge = currentDate13 - ageDate;
document.write('Your age is '+diffAge)
document.write('<br>Your birth year is '+ageDate)

// Task 14

document.writeln("<br><br>")
document.write('<h1>K-Electric Bill</h1>')
var customerName = 'Talha Khalid';
document.write('Customer Name: '+customerName)
var  months1 = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var currentDate14 = new Date();
var monthName1=months1[currentDate14.getMonth()];
document.write('<br>Month: '+monthName1)
var numOfUnit = 410;
document.write('<br>Number of unit: '+numOfUnit.toFixed(2))
var chargesPerUnit = 16;
document.write('<br>Charges per unit: '+chargesPerUnit.toFixed(2))
document.write('<br><br>')
var netAmount = numOfUnit * chargesPerUnit;
document.write('Net amount payable(within Due Date): '+netAmount.toFixed(2))
var lateCharges = 350;
document.write('<br>Late payment charges: '+lateCharges.toFixed(2))
var grossAmount = netAmount +lateCharges;
document.write('<br>Gross amount payable(within Due Date): '+grossAmount.toFixed(2))