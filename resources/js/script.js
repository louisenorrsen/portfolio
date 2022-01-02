let btn = document.getElementById('archive-btn')

let archiveEmty = () => {
    btn.innerHTML = 'Archive is emty'
}

btn.addEventListener('click', archiveEmty)

let resetArchiveBtn = () => {
    btn.innerHTML = 'Archive of older projects'
}

btn.addEventListener('mouseout', resetArchiveBtn)


