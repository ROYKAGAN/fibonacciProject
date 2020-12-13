function checkInput(){
    var password = document.getElementById("sample").value;
    console.log(password);
    if (password == 123){
        document.createElement("a").text = "to pass to the next level"
    }

    else{
        alert("הסיסמה שגויה")
    }
    document.getElementById("sample").value = ""
}