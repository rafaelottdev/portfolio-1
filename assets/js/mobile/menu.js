const menuBtn = document.querySelector('.menu-hamb-btn')

function showMenu() {
    const navigationList = document.querySelector('.navigation__list')
    const menuHambtn = document.querySelector('.menu-hamb-btn')
    const menuListElements = [... document.querySelectorAll('.menu-hamb-btn > div')]

    navigationList.classList.toggle('show-menu')
    menuHambtn.classList.toggle('center-menu-icon')

    menuListElements.forEach((element) => {
        element.classList.toggle('menu-transform')
    })
}

menuBtn.addEventListener('click', showMenu)
