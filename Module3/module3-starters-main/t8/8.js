document.querySelector("#start").addEventListener('click', math)
function math() {
    let option = document.getElementById('operation').value
    let num1, num2
    switch (option) {
        case 'add':
            num1 = parseFloat(document.getElementById('num1').value);
            num2 = parseFloat(document.getElementById('num2').value);
            document.getElementById("result").innerHTML = num1 + num2
            break
        case 'sub':
            num1 = parseFloat(document.getElementById('num1').value);
            num2 = parseFloat(document.getElementById('num2').value);
            document.getElementById("result").innerHTML = num1 - num2
            break
        case 'multi':
            num1 = parseFloat(document.getElementById('num1').value);
            num2 = parseFloat(document.getElementById('num2').value);
            document.getElementById("result").innerHTML = num1 * num2
            break
        case 'div':
            num1 = parseFloat(document.getElementById('num1').value);
            num2 = parseFloat(document.getElementById('num2').value);
            document.getElementById("result").innerHTML = num1 / num2
            break
    }
}