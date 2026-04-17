//Requires running CORS_chuck.py api
document.querySelector("form").addEventListener('submit', async function(jokes) {
    jokes.preventDefault()
    let joke = await fetch('http://127.0.0.1:3000/search/' + document.querySelector("#query").value)
    joke = await joke.json()
    joke = joke['result']
    for (let i = 0; i < joke.length; i++) {
        console.log(joke[i]['value'])
        let art = document.createElement('article')
        art.innerHTML = '<p>' + joke[i]['value'] + '</p>'
        document.querySelector("#results").appendChild(art)
    }
})