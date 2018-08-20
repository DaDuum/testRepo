window.onload = function () {

    this.document.getElementById("div01").onclick = function () {

        //// filter evenNumbers 
        //var evenNumbers = new Array(0, 2, 4, 6, 8, 9, 10, 12);
        //var allEven = evenNumbers.filter(evenNumbersCheck, evenNumbers);

        //function evenNumbersCheck(value, index, array) {
        //    return (value % 2) == 0;
        //}

        //// Round numbers 
        //var money = [12.8, 15.9, 21.7, 35.2];
        //var roundMoney = money.map(roundOff, money);

        //function roundOff(value, position, array) {
        //    return Math.round(value);
        //}


        //var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        //var factorials = numbers.reduce(factorial);
        //function factorial(previous, current) {
        //    return previous * current;
        //}
        //console.log(factorials);

        var person = { firstName: "Jeff", lastName: "Morris", gender: "male" };

        for (var prop in person) {
            document.write(prop);
        }


    }



}
