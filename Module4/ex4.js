//Requires running CORS_tvmaze.py api
document.querySelector("form").addEventListener('submit', async function(submit) {
    document.querySelector("#results").innerHTML = ""
    submit.preventDefault()
    const url = `http://127.0.0.1:3000/shows/${document.querySelector("input[name='q']").value}`
    try {
        const response = await fetch(url)
        const json = await response.json()
        for (let i = 0; i < json.length; i++) {
            const art = document.createElement('article')
            const header = document.createElement('h2')
            header.textContent = json[i]['show']['name']
            art.appendChild(header)
            const image = document.createElement('img')
            if (json[i]['show']['image']) {
                image.setAttribute('src', json[i]['show']['image']['medium'])
                image.setAttribute('alt', json[i]['show']['name'])
            } else {
                image.setAttribute('src', 'https://placehold.co/210x295?text=Not%20Found')
            }
            art.appendChild(image)
            const a = document.createElement('a')
            a.setAttribute('href', json[i]['show']['url'])
            a.setAttribute('target', '_blank')
            a.textContent = json[i]['show']['url']
            art.appendChild(a)
            const summary = document.createElement('div')
            summary.innerHTML = json[i]['show']['summary']
            art.appendChild(summary)
            document.querySelector("#results").appendChild(art)
        }
    } catch(error) {
        console.log(error.message)
    }
})