document.getElementById('submit').onclick = function(){
    let answer = document.getElementById('input').value;
    document.getElementById('output').innerHTML = answer;
    if (isNaN(answer)){
        document.getElementById('output').innerHTML = answer + " is not a number";
    }else if (answer == correctAnswer){
        document.getElementById('output').innerHTML = "Correct " + numOne + ' + ' + numTwo + ' = ' + answer;
    }else{
        document.getElementById('output').innerHTML = "Incorrect " + numOne + ' + ' + numTwo + " does NOT = " + answer;
    }
}


document.getElementById('new').onclick = function(){
    document.getElementById('input').value = '';
    document.getElementById('output').innerHTML = '';
    numOne = Math.floor(Math.random()* 100) +1;
    numTwo = Math.floor(Math.random()* 100) +1;
    correctAnswer = numOne + numTwo;
    document.getElementById('nums').innerHTML = numOne + ' + ' + numTwo;
}
