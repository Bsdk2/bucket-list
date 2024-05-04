// remove
// mark

const listitem = document.getElementById("uli")
const butto = document.getElementById('butto')
const inputext = document.getElementById('textarea')


butto.addEventListener('click', function () {
    const newinput = inputext.value.trim()
    if (newinput === '') {
        inputext.placeholder = 'add some text'
    }
    else {
        const new_elem = document.createElement('li')
        new_elem.textContent = newinput
        listitem.appendChild(new_elem)
        inputext.value = ''
    }

})
const child = document.querySelector("ul>li")
function handledoubleclick(event) {
    if (event.target.child = 'li') {
        console.log('CLICKED ON NEW LI')
    }
    child.addEventListener('dblclick', function () {
        console.log('child');
    }



    )
}