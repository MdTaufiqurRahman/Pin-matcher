//creat pin................
document.getElementById("creatPin").addEventListener("click", function(){
    var creatPin = Math.round(1000+Math.random()*9000);
    document.getElementById("pin").value = creatPin;
})


//get number................
function number(num){
    var input = document.getElementById("inputPin");
    switch(num){
        case 1:
            input.value += "1";
            break;
        case 2:
            input.value += "2";
            break;
        case 3:
            input.value += "3";
            break;
        case 4:
            input.value += "4";
            break;
        case 5:
            input.value += "5";
            break;
        case 6:
            input.value += "6";
            break;
        case 7:
            input.value += "7";
            break;
        case 8:
            input.value += "8";
            break;
        case 9:
            input.value += "9";
            break;
         case 0:
            input.value += "0";
            break;
    }
}


//clearScreen.............
document.getElementById("clear").addEventListener("click", function(){
    document.getElementById("inputPin").value = "";
})


//backspace.................
document.getElementById("clearSpace").addEventListener("click", function(){
    var input = document.getElementById("inputPin");
    var x = input.value;
    if(x.length > 0){
        x = x.substring(0, x.length-1)
        input.value = x;
    }
})


//pin mather function............
document.getElementById("submit").addEventListener("click", function(){
    var input = document.getElementById("inputPin").value;
    var pin = document.getElementById("pin").value;
    if(input == '' || pin == ''){
        alert("please enter 4 digit pin or click generate pin");
    }
    else if(input == pin){
        display("rightPinNotify","block")
        display("wrongPinNotify","none")
        document.getElementById("inputPin").value = "";
        document.getElementById("pin").value = "";
    }
    else if(input != pin){   
        display("rightPinNotify","none")
        display("wrongPinNotify","block")
        document.getElementById("inputPin").value = "";
        var tryLeft = document.getElementById("tryLeft").innerText;
        var num = parseInt(tryLeft);
        var tryCount = num - 1;
        document.getElementById("tryLeft").innerText = tryCount;
        if(tryCount <= -1){
            document.getElementById("tryLeft").innerText = 0;
        }
        else if(tryCount == 0){
            document.getElementById("submit").style.display = "none";
            var notify = document.getElementById("notify");
            notify.style.display = "block";
        }
    }
})
document.getElementById("creatPin").addEventListener("click", function(){
    display("submit","block")
    document.getElementById("submit").style.margin = "auto";
    document.getElementById("submit").style.marginTop = "20px";
    display("notify","none")
    document.getElementById("tryLeft").innerText = 3;
    display("wrongPinNotify","none")
    display("rightPinNotify","none")
    document.getElementById("inputPin").value = "";
})
function display(id,property){
    document.getElementById(id).style.display = property;
}