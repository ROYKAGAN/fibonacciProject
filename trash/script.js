function processNum(){
    var firstNum = document.getElementById("sample1").value;
    var secNum = document.getElementById("sample2").value;
    var num1 = firstNum + secNum;
    var num2 = num1 + secNum;
    var num3 = num2 + num1;
    var num4 = num3 + num2;
    var num5 = num4 + num3;
    var num6 = num5 +num4;
    var num7 = num6 + num5;

    var sum = num7 * 11;

}