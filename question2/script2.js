function checkInput(){

    var password = document.getElementById("sample").value;

    if (password == 123){
        alert("כל הכבוד!")
        window.location.pathname = "/fibonacciProject/question3/index3.html";
    }

    document.getElementById("sample").value = ""
}