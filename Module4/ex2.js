document.querySelector("form").addEventListener('submit', async function(submit) {
    submit.preventDefault()
    const url = `https://api.tvmaze.com/search/shows&q${document.querySelector("input[name='q']").value}`
    try {
        const response = await fetch(url)
        const json = await response.json()
        console.log(json)
    } catch(error) {
        console.log(error.message)
    }
})