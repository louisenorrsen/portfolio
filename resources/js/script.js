let btn = document.getElementById('archive-btn')

let archiveEmty = () => {
    btn.textContent = 'Archive is emty'
}

btn.addEventListener('click', archiveEmty)

let resetArchiveBtn = () => {
    btn.textContent = 'Archive of older projects'
}

btn.addEventListener('mouseout', resetArchiveBtn)


