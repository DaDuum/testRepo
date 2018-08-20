window.onload = function () {
    //var numbers = new Array(0, 2, 4, 6, 8);
    //var allEvenNum = numbers.every(evenNumberCheck, this);

    //if (allEvenNum == true) {
    //    this.console.log("all even");
    //} else {
    //    this.console.log("some of them are not even..");
    //}


    document.getElementById("button01").onclick = function () {
        //console.log("hell"); 
        buttonClicked();
    }
    

}

function buttonClicked() {
    console.log("clicked");
}

//function evenNumberCheck(value, index, array) {
//    return (value % 2) == 0;
//}

