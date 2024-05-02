const listitem = document.getElementById("uli")
const butto = document.getElementById('butto')
const inputext = document.getElementById('textarea')

butto.addEventListener('click', function () {
    const newinput = inputext.value.trim()
    const new_elem = document.createElement('li')
    new_elem.textContent = newinput
    listitem.appendChild(new_elem)
    newinput.value = ''
})