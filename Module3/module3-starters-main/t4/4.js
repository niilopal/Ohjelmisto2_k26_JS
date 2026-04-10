'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];
for (let i = 0; i < students.length; i++) {
  let li = document.createElement("option")
  li.setAttribute("value", students[i]["id"])
  li.textContent = students[i]["name"]
  document.querySelector("#target").appendChild(li)
}