//requires running CORS_tvmaze.py api
document.querySelector("form").addEventListener('submit', async function(submit) {
    submit.preventDefault()
    const url = `http://127.0.0.1:3000/shows/${document.querySelector("input[name='q']").value}`
    try {
        const response = await fetch(url)
        const json = await response.json()
        console.log(json)
    } catch(error) {
        console.log(error.message)
    }
})