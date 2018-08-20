var globalVar = "global";

window.onload = function () {
    var localVar = "local";

    this.document.getElementById("Div1").onclick = function () {
        var insideDiv1Click = "insideDiv1";
        alert(globalVar);
        alert(localVar);
        alert(insideDiv1Click);
    }
    this.document.getElementById("Div2").onclick = function () {
        alert(globalVar);
        alert(localVar);
        alert(insideDiv1Click);
    }
    this.document.getElementById("Div3").onclick = function () {
        var insideDiv3 = "Div3";
        AFunction();
        BFunctionWithParam(insideDiv3);
    }
      
    function AFunction() {
        var x;
    }

    function BFunction(p) {
    }

    function BFunctionWithParam(p) {
        alert(p);
        alert(localVar);
    }

}