function Book() {
    //just creates an empty book.
}

function Book(title, length, author) {
    this.title = title;
    this.Length = length;
    this.author = author;
}

Book.prototype = {
    ISBN: "",
    Length: -1,
    genre: "",
    covering: "",
    author: "",
    currentPage: 0,
    title: "",
    flipTo: function FlipToAPage(pNum) {
        this.currentPage = pNum;
    },
    turnPageForward: function turnForward() {
        this.flipTo(this.currentPage++);
    },
    turnPageBackward: function turnBackward() {
        this.flipTo(this.currentPage--);
    }
};

function Author() {
}
function Author(firstName, lastName, gender) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
}
Author.prototype = {
    firstName: "",
    lastName: "",
    gender: "",
    BookCount: 0
}

var books = new Array(new Book(),
    new Book("First Edition", 350, new Author("Random", "Author", "M")
        
    ));

var i;

//var popupBook = Object.create(Book.prototype, {
//        hasSound: { value: true },
//        showPopUp: { value: function showPop() {
//            console.log('hell');
//            }
//        }
//});


function PopUpBook() {
    Book.call(this);
}
PopUpBook.prototype = Book.prototype;
PopUpBook.prototype.hasSound = false;
PopUpBook.prototype.showPopUp = function ShowPop() {
    console.log('hell ya');
}

var popupBook = new PopUpBook();


console.log("1. ", popupBook);

window.onload = function () {

    this.document.getElementById("div01").onclick = function () {

        //var evenNum = new Array(0, 2, 4, 5, 6, 8, 10);
        //var allEven = evenNum.some(evenNumCheck, this);
        //    if (allEven) {
        //        console.log(allEven + " wow");
        //    } else {
        //        console.log(allEven + " NO");
        //    }
        //    function evenNumCheck(value, index, array) {
        //        return (value % 2) == 0;
        //    }

        //for (i = 0; i < books.length; i++) {
        //    console.log(books[i]);
        //}

        var evenNumbers = new Array(0, 2, 4, 6, 8, 9, 10, 12);
        var allEven = evenNumbers.filter(evenNumbersCheck, evenNumbers);

        function evenNumbersCheck(value, index, array) {
            return (value % 2) == 0;
        }

    }

    switch (document.getElementById("canvas").style.backgroundColor) {
        case "yellow":
            console.log("yellow");
            break;
        case "black":
            console.log("black");
            break;
        default:
            console.log("unknown");
            break;

    }

    //var sportsArray = ['soccer', 'basketball', 'hockey', 'football', 'cricket', 'rugby'];
    
    ////sportsArray.forEach(offerSport);
    //sportsArray.sort().forEach(offerSport);
    //function offerSport(value, index, array) {
    //    var sportsList = document.getElementById("sportsList");
    //    var bullet = document.createElement("li");
    //    bullet.innerText = value;
    //    sportsList.appendChild(bullet);
    //}

 


}






