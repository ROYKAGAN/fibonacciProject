function checkInput(){
    var password = document.getElementById("sample").value;
    console.log(password);
    if (password == 123){
        window.location.pathname = "/path/to/another/file.html/";
    }

    else{
        alert("הסיסמה שגויה")
    }
    document.getElementById("sample").value = ""
}