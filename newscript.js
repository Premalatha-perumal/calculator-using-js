// function to calculate the two values based on the symbol passed in button
function cal(smb) {
    let numberone = document.getElementById('num1'),
        numbertwo = document.getElementById('num2'),
        output = document.getElementById('output');
    if (smb == '+') {
        output.value = (parseInt(numberone.value) + parseInt(numbertwo.value));
    }
    else if (smb == '-') {
        output.value = (parseInt(numberone.value) - parseInt(numbertwo.value));
    }
    else if (smb == '*') {
        output.value = (parseInt(numberone.value) * parseInt(numbertwo.value));
    }
    else if (smb == '/') {
        output.value = (parseInt(numberone.value) / parseInt(numbertwo.value));
    }
}