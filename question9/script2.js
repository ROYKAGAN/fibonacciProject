function checkInput(){

    var password = document.getElementById("sample").value;

    if (password == 377){
        var head = document.getElementsByTagName('HEAD')[0];  
        var link = document.createElement('link'); 

        link.rel = 'stylesheet';
        link.href = 'correct.css';
        
        head.appendChild(link);

        alert("כל הכבוד")
        //next  q:
        window.location.pathname = "/fibonacciProject/end/index.html";
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


function backToQ(){
    window.location.pathname = "/fibonacciProject/question2/index2.html";
}


function getHint(){
        var element = document.getElementById("hint");
        element.parentNode.removeChild(element);

        var div = document.getElementsByClassName('hintSection')[0];  
        var h1 = document.createElement('h1'); 

        h1.className = "hintText"

        h1.textContent = "זוג ארנבים ממליט כל חודש זוג ארנבים חדש. כל זוג ארנבים חדש מחכה חודש עד לתחילת ההמלטות. אם מכניסים לגן סגור זוג חדש של ארנבים, כמה זוגות של ארנבים יהיו בסוף השנה?"

        div.appendChild(h1);
        
        time += 1;

    
    
}