function calc() {
    var num1 = parseInt(document.querySelector("#num1").value);
    var num2 = parseInt(document.querySelector("#num2").value);
    var operation = document.querySelector("#option").value;
    var answer;

    if(operation == "add") {
        answer = num1 + num2;
    }else if(operation == "subtract") {
        answer = num1 - num2;
    }else if(operation == "multiply") {
        answer = num1 * num2;
    }else if(operation == "divide") {
        answer = num1 / num2;
    }
    document.querySelector("#result").innerHTML = answer;
}   