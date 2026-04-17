//requires running CORS_chuck.py api
async function joke() {
    let joke = await fetch('http://127.0.0.1:3000/chuck/random')
    joke = await joke.json()
    console.log(joke['value'])
}
joke()