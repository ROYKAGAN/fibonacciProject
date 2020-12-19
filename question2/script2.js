function checkInput(){

    var password = document.getElementById("sample").value;

    if (password == 11){
        alert("כל הכבוד!")
        //next  q:
        // window.location.pathname = "/fibonacciProject/question3/index3.html";
    } 

    document.getElementById("sample").value = ""
}

function goToPass(){
    window.location.pathname = "/fibonacciProject/question2/password.html";
}

function backToQ(){
    window.location.pathname = "/fibonacciProject/question2/index2.html";
}