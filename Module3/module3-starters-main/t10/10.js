let inp1, inp2
document.querySelector("form").addEventListener('submit', function(evt) {
    evt.preventDefault()
    inp1 = document.querySelector("input[name='firstname']")
    inp2 = document.querySelector("input[name='lastname']")
    document.getElementById("target").innerText = `Your name is ${inp1.value} ${inp2.value}`
})