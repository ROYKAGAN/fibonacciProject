function goToPass(){
    window.location.pathname = "/fibonacciProject/question7/password.html";
}

function backToQ(){
    window.location.pathname = "/fibonacciProject/question7/index.html";
}

function checkInput(){
    
    var password = document.getElementById("sample").value;

    if (password == "יחס הזהב"){
        var head = document.getElementsByTagName('HEAD')[0];  
        var link = document.createElement('link'); 

        link.rel = 'stylesheet';
        link.href = 'correct.css';

        alert("כל הכבוד")

        head.appendChild(link);
        //next  q:
        window.location.pathname = "/fibonacciProject/spirala/q7.html";
    }

    else{
        var head = document.getElementsByTagName('HEAD')[0];  
        var link = document.createElement('link'); 

        link.rel = 'stylesheet';
        link.href = 'incorrect.css';
        
        head.appendChild(link);
    }

    document.getElementById("sample").value = ""
}

