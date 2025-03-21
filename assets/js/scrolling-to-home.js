const headerTitle = document.querySelector('.menu-container__title')

function scrollingToHome() {
    window.scrollTo({top: 0, left: 0, behavior: "smooth"})
}

headerTitle.addEventListener('click', scrollingToHome)
