const header = document.querySelector('.l-header')

function scrollLog() {
    if(window.scrollY > 0) {
        header.classList.add('scrolling')
    }

    else {
        header.classList.remove('scrolling')
    }
}

window.addEventListener('scroll', scrollLog)
