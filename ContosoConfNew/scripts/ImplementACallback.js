window.onload = function () {
    this.console.log("window.onload - start");
    WillCallBackWhenDone(MyCallBack, 3, 3);
    this.console.log("window.onload - end");
        }

function WillCallBackWhenDone(f, a, b) {
    console.log("WillCallBackWhenDone - start");
    var r = a * b;
    f(r);
    console.log("WillCallBackWhenDone - end");
}

function MyCallBack(result) {
    console.log("MyCallBack - start");
    console.log(result);
    console.log("MyCallBack - end");
}
