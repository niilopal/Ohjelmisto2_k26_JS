document.getElementById("start").addEventListener('click', math)
function math() {
    let calculation = document.getElementById("calculation").value
    switch (calculation.includes('+')) {
        case true:
            calculation = calculation.split('+')
            document.getElementById("result").innerHTML = parseInt(calculation[0]) + parseInt(calculation[1])
    }
    switch (calculation.includes('-')) {
        case true:
            calculation = calculation.split('-')
            document.getElementById("result").innerHTML = parseInt(calculation[0]) - parseInt(calculation[1])
    }
    switch (calculation.includes('*')) {
        case true:
            calculation = calculation.split('*')
            document.getElementById("result").innerHTML = parseInt(calculation[0]) * parseInt(calculation[1])
    }
    switch (calculation.includes('/')) {
        case true:
            calculation = calculation.split('/')
            document.getElementById("result").innerHTML = parseInt(calculation[0]) / parseInt(calculation[1])
    }
}