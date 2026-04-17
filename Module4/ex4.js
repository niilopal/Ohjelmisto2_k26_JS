document.querySelector("form").addEventListener('submit', async function(submit) {
    submit.preventDefault()
    const url = `https://api.tvmaze.com/search/shows&q${document.querySelector("input[name='q']").value}`
    try {
        const response = await fetch(url)
        const json = await response.json()
        for (let i = 0; i < json.length; i++) {
            const art = document.createElement('article')
            const header = document.createElement('h2')
            header.textContent = json[i]['show']['name']
            art.appendChild(header)
            const a = document.createElement('a')
            a.setAttribute('href', json[i]['show']['url'])
            art.appendChild(a)
            const image = document.createElement('img')
            if (json[i]['show']['image']) {
                image.setAttribute('src', json[i]['show']['image']['medium'])
                image.setAttribute('alt', json[i]['show']['name'])
                art.appendChild(image)
            }
            const summary = document.createElement('div')
            summary.innerHTML = json[i]['show']['summary']
            art.appendChild(summary)
            document.querySelector("#results").appendChild(art)
        }
    } catch(error) {
        console.log(error.message)
    }
})