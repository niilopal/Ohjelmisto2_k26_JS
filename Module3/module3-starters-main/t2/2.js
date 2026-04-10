li0 = document.createElement("li")
li0.textContent = "First item"
li1 = document.createElement("li")
li1.textContent = "Second item"
li1.classList.add("my-item")
li2 = document.createElement("li")
li2.textContent = "Third item"
document.querySelector("#target").appendChild(li0)
document.querySelector("#target").appendChild(li1)
document.querySelector("#target").appendChild(li2)