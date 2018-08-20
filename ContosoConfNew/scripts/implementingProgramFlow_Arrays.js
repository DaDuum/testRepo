
function executeFunction01() {

    var evenNumbers = new Array(0, 2, 4, 6, 8, 10, 12);
    var allEven = evenNumbers.every(evenNumberCheck, this);

    if (allEven) {
        console.log("all even ..");
    } else {
        console.log("nope ..");
    }
    function evenNumberCheck(value, index, array) {
        return (value % 2) == 0;
    }
}

function executeFunction02() {
    var sportsArray = ['soccer', 'basketball', 'hockey', 'football', 'cricket', 'rugby'];
    sportsArray.sort().forEach(offerSport);
    //sportsArray.forEach(offerSport);

    function offerSport(value, index, array) {
        var sportsList = document.getElementById("sportsList");
        var bullet = document.createElement("li");
        bullet.innerText = value;
        sportsList.appendChild(bullet);
    }
}

function executeFunction03() {
    var evenNumbers = new Array(0, 2, 4, 6, 8, 9, 10, 12);
    var allEven = evenNumbers.filter(evenNumberCheck, evenNumbers);

    function evenNumberCheck(value, index, array) {
        return (value % 2) == 0;
    }
    console.log(allEven);
}

function executeFunction04() {
    var money = [12.8, 15.9, 21.7, 35.2];
    var roundedMoney = money.map(roundOff, money);
    console.log(money);

    function roundOff(value, index, array) {
        return Math.round(value);
    }
    console.log(roundedMoney);

}

function executeFunction05() {
    var sum = 0;

    for (iterator = 0; iterator < 1000; iterator++) {
        if (iterator % 3 == 0 || iterator % 5 == 0) {
            console.log(iterator)
            sum += iterator;
        }
    }
    console.log(sum);
}

// Multiples of 3 and 5 - Project Euler
function executeFunction06() {
    var endOfSequence = 100;
    var firstNum = 0;
    var secondNum = 1;
    var temp = 1;

    for (iterator = 2; iterator <= endOfSequence; iterator++) {
        temp = firstNum + secondNum;
        firstNum = secondNum;
        secondNum = temp;
    }
    console.log(temp);
}

// sum of Even Fibonacci numbers - Project Euler
function executeFunction07() {
    var endOfSequence = 10000;
    var a = 0;
    var b = 1;
    var temp = 1;
    var evenNumbers = 0;
    var cap = 4000000;

    for (iterator = 2; iterator <= endOfSequence; iterator++) {
        temp = a + b;
        a = b;
        b = temp;
        if (b >= cap) {
            break;   
        }

        if (b % 2 == 0) {
            evenNumbers += b;
        }  
    }
    console.log(evenNumbers);
}



