function goToPass(){
    window.location.pathname = "/fibonacciProject/question3/password.html";
}

function backToQ(){
    window.location.pathname = "/fibonacciProject/question3/index3.html";
}

function checkInput(){
    
    var password = document.getElementById("sample").value;

    if (password == 810){
        var head = document.getElementsByTagName('HEAD')[0];  
        var link = document.createElement('link'); 

        link.rel = 'stylesheet';
        link.href = 'correct.css';

        alert("כל הכבוד")

        head.appendChild(link);
        //next  q:
        window.location.pathname = "/fibonacciProject/spirala/q6.html";
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

