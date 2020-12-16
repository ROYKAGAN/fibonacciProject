function checkInput(){

    var password = document.getElementById("sample").value;

    if (password == 123){
        alert("כל הכבוד!")
        window.location.pathname = "/question3/index3.html";
    }

    else{
        alert("הסיסמה שגויה נסה שוב")
    }

    document.getElementById("sample").value = ""
}