document.querySelector("#trigger").addEventListener('mouseenter', picb)
document.querySelector("#trigger").addEventListener('mouseleave', pica)
function picb() {
    document.querySelector("#target").setAttribute('src', 'img/picB.jpg')
}
function pica() {
    document.querySelector("#target").setAttribute('src', 'img/picA.jpg')
}